import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PAGE_ALREADY, PAGE_NOT_FOUND } from './constance/page.message.constance';
import { PageDto } from './dto/page.dto';
import { PageEntity } from './entity/page.entity';

@Injectable()
export class PageService {

  constructor(
    @InjectRepository(PageEntity) private readonly pageRepository: Repository<PageEntity>
  ) { }

  /**
   * @description GET PAGE BY ID
   * @param id 
   * @returns 
   */
  async getById(id: number) {
    const page = await this.pageRepository.findOne({
      where: { id },
      relations: {
        hero: {
          subcontent: true
        }
      },
      order: {
        createdAt: 'DESC'
      },
      select: {
        hero: {
          id: true,
          title: true,
          background: true,
          subcontent: true
        }
      }
    })
    if (!page) throw new NotFoundException(PAGE_NOT_FOUND)
    return page
  }

  async getAllPages() {
    return await this.pageRepository.find({
      relations: {
        hero: {
          subcontent: true
        }
      },
      select: {
        hero: {
          background: true,
          title: true,
          page: {
            name: true
          }
        }
      },
      order: {
        updatedAt: "ASC"
      }
    })
  }

 
  /**
   * @param dto 
   */
  async createPage(dto: PageDto) {
    const page = await this.pageRepository.findOne({where: {name: dto.name}})
    if (!page) {
      const newData = this.pageRepository.create(dto)
      return await this.pageRepository.save(newData)
    }
    throw new BadRequestException(PAGE_ALREADY)
  }

  /**
   * @param id 
   * @param dto 
   * @returns 
   */
  async updatePage(id: number, dto: PageDto) {
    const page = await this.getById(id)

    return await this.pageRepository.save({
      ...page,
      ...dto
    })
  }

  async deletePage(id: number) {
    return await this.pageRepository.delete(id)
  }
}
