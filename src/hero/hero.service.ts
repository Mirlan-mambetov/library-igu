import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PAGE_NOT_FOUND } from 'src/page/constance/page.message.constance';
import { PageEntity } from 'src/page/entity/page.entity';
import { deleteFileWithName } from 'src/utils/fileupload.utils';
import { Repository } from 'typeorm';
import { HERO_GET_UPLOADS_IMAGE, HERO_NOT_FOUND } from './constance/hero.constance';
import { HERO_SUBCONTENT_NOT_FOUND } from './constance/hero.subcontent.constace';
import { HeroDto } from './dto/hero.dto';
import { HeroSubcontentDto } from './dto/HeroSubcontentDto';
import { HeroEntity } from './entity/Hero.entity';
import { HeroSubcontentEntity } from './entity/hero.subcontent.entity';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(HeroEntity) private readonly heroRepository: Repository<HeroEntity>,
    @InjectRepository(PageEntity) private readonly pageRepository: Repository<PageEntity>,
    @InjectRepository(HeroSubcontentEntity) private readonly heroSubcontentRepository: Repository<HeroSubcontentEntity>
  ) {}

  async getHeroById(id: number) {
    const hero = await this.heroRepository.findOne({
      where: {id},
      relations: {
        subcontent: true
      },
      select: {
        subcontent: {
          id: true,
          title: true,
          description: true
        }
      }
    })
    if (!hero) throw new NotFoundException(HERO_NOT_FOUND)
    return hero
  }

  async getHeroSubcontentById(id: number) {
    const subcontent = await this.heroSubcontentRepository.findOne({
      where: {id},
      select: {
        id: true,
        title: true,
        description: true
      }
    })
    if (!subcontent) throw new NotFoundException(HERO_SUBCONTENT_NOT_FOUND)
    return subcontent
  }

  async createHero(pageId: number, dto: HeroDto) {
    const page = await this.pageRepository.findOne({where: {id: pageId}})
    if (!page) throw new NotFoundException(PAGE_NOT_FOUND)
    const newData = this.heroRepository.create({
      ...dto,
      // background: `${HERO_GET_UPLOADS_IMAGE}/${file}`,
      page: page
    })
    return await this.heroRepository.save(newData)
  }
  // `${HERO_GET_UPLOADS_IMAGE}/${file}`
  async updateHero(id: number, dto: HeroDto) {
    const hero = await this.getHeroById(id)
    return await this.heroRepository.save({
      ...hero,
      title: dto.title
      // background: `${HERO_GET_UPLOADS_IMAGE}/${dto.background}`
    })
  }

  async updateHeroImage(id: number, file: string) {
    const hero = await this.getHeroById(id)
     deleteFileWithName(hero.background)
    return await this.heroRepository.save({
      ...hero,
      background: `${HERO_GET_UPLOADS_IMAGE}/${file}`
    })
  }

  async createHeroSubcontent(id: number, dto: HeroSubcontentDto) {
    const hero = await this.getHeroById(id)

    const newData = this.heroSubcontentRepository.create({
      ...dto,
      hero: hero
    })
    return await this.heroSubcontentRepository.save(newData)
  }

  async updateHeroSubcontent(id: number, dto: HeroSubcontentDto) {
    const subcontent = await this.getHeroSubcontentById(id)
    const newDate = await this.heroSubcontentRepository.save({
      ...subcontent,
      ...dto
    })
    return await this.heroSubcontentRepository.save(newDate)
  }

  async deleteHeroSubcontent(id: number) {
    return await this.heroSubcontentRepository.delete(id)
  }

}
