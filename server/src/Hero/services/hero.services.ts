import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { PAGE_NOT_FOUND } from 'src/pages/constants/pages.constans';
import { PageEntity } from 'src/pages/entities/Page';
import { deleteFileWithName } from 'src/utils/fileuploads.utils';
import { Repository } from 'typeorm';
import { HERO_IMG_DIST } from '../constans/destination.constans';
import { HERO_NOT_FOUND } from '../constans/message.constans';
import { CreateHeroDto } from '../dto/create.hero.dto';
import { CreateSubcontentDto } from '../dto/create.subcontent.dto';
import { UpdateHeroDto } from '../dto/update.hero.dto';
import { UpdateSubcontentDto } from '../dto/update.subcontent.dto';
import { HeroE } from '../entities/hero';
import { HerosubcontentE } from '../entities/hero.subcontent';


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
  async createHero(id: number, hero: CreateHeroDto, fileName: string) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const heroSave = this.heroModel.create({
      ...hero,
      background: `${HERO_IMG_DIST}/${fileName}`,
      page
    })
    return await this.heroModel.save(heroSave)
  }

  /**
   * @param id 
   * @param hero 
   */
  async updateHero(id: number, hero: UpdateHeroDto, file: string) {
    if (file) {
      const { background } = await this.heroModel.findOne({ where: { id } })
      if (background) deleteFileWithName(background)
      await this.heroModel.update({ id }, {
        ...hero,
        background: `${HERO_IMG_DIST}/${file}`
      })
    } else {
      await this.heroModel.update({ id }, {
        ...hero
      })
    }
  }

  /**
   * @param id 
   * @param content 
   */
  async createSubcontent(id: number, content: CreateSubcontentDto) {
    const hero = await this.heroModel.findOne({ where: { id } })
    if (!hero) throw new HttpException(HERO_NOT_FOUND, HttpStatus.BAD_REQUEST)
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
  async updateSubContent(id: number, content: UpdateSubcontentDto) {
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