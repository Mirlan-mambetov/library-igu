import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PAGE_NOT_FOUND } from './constance/page.message.constance';
import { PageDto } from './dto/page.dto';
import { PageEntity } from './entity/page.entity';

@Injectable()
export class PageService {

  constructor(
    @InjectRepository(PageEntity) private readonly pageRepository: Repository<PageEntity>
  ) { }

  /**
   * @param id 
   * @returns 
   */
  async getById(id: number) {
    const page = await this.pageRepository.find({
      where: { id },
      relations: {
        hero: true
      }
    })
    if (!page) throw new NotFoundException(PAGE_NOT_FOUND)
    return page
  }

  /**
   * @param dto 
   */
  async createPage(dto: PageDto) {
    const page = await this.pageRepository.findOne({ where: { name: dto.name } })

  }
}
