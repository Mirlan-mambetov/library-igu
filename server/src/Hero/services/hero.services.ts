import { Injectable } from '@nestjs/common'
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from 'src/pages/entities/Page';
import { Repository } from 'typeorm';
import { PAGES_NOT_FOUND } from '../constans/message.constans';
import { HeroE } from '../entities/hero';
import { HerosubcontentE } from '../entities/hero.subcontent';
import { HeroI, HeroSubContentI } from '../interfaces/hero';


@Injectable()
export class HeroSerivce {

  constructor(
    @InjectRepository(HeroE) private readonly heroModel: Repository<HeroE>,
    @InjectRepository(HerosubcontentE) private readonly heroSubcontentModel: Repository<HerosubcontentE>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>
  ) { }

  /**
   * @returns 
   */
  findAll() {
    return this.heroModel.find({ relations: ['subcontent'] })
  }

  /**
   * @param id 
   */
  findHeroById(id: number) {
    return this.heroModel.findOne({ where: { id }, relations: ['subcontent'] })
  }

  /**
   * @param hero 
   */
  async createHero(id: number, hero: HeroI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGES_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const heroSave = this.heroModel.create({
      ...hero,
      page
    })
    return await this.heroModel.save(heroSave)
  }

  /**
   * @param id 
   * @param hero 
   */
  updateHero(id: number, hero: HeroI) {
    return this.heroModel.update({ id }, hero)
  }

  /**
   * @param id 
   * @param content 
   */
  async createSubcontent(id: number, content: HeroSubContentI) {
    const hero = await this.heroModel.findOne({ where: { id } })
    if (!hero) throw new HttpException('Hero с таким id не найден', HttpStatus.BAD_REQUEST)
    const newContent = this.heroSubcontentModel.create({
      ...content,
      hero
    })
    return await this.heroSubcontentModel.save(newContent)
  }

  /**
   * @param id 
   * @param content 
   */
  async updateSubContent(id: number, content: HeroSubContentI) {
    const newContent = this.heroSubcontentModel.update({ id }, content)
    return newContent
  }

  /**
   * @param id 
   */
  deleteSubContent(id: number) {
    return this.heroSubcontentModel.delete(id)
  }

  deleteHero(id: number) {
    return this.heroModel.delete(id)
  }
}