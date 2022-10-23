import { Injectable } from '@nestjs/common'
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeroE } from '../entities/hero';
import { HerosubcontentE } from '../entities/hero.subcontent';
import { HeroI, HeroSubContentI } from '../interfaces/hero';


@Injectable()
export class HeroSerivce {

  constructor(
    @InjectRepository(HeroE) private readonly heroModel: Repository<HeroE>,
    @InjectRepository(HerosubcontentE) private readonly heroSubcontentModel: Repository<HerosubcontentE>
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
  createHero(hero: HeroI) {
    const heroSave = this.heroModel.create(hero)
    return this.heroModel.save(heroSave)
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
  async createSubcontent(id: number, content: HeroSubContentI[]) {
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
}