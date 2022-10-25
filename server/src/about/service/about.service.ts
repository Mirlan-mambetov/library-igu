import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { PAGE_NOT_FOUND } from 'src/pages/constants/pages.constans';
import { PageEntity } from 'src/pages/entities/Page';
import { Repository } from 'typeorm';
import { AboutEntity } from '../entities/About';
import { AboutI } from '../interface/about.interface';

@Injectable()
export class AboutService {

  constructor(
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>,
    @InjectRepository(AboutEntity) private readonly aboutModel: Repository<AboutEntity>
  ) { }

  async create(id: number, data: AboutI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const newData = this.aboutModel.create({
      ...data,
      page
    })
    return await this.aboutModel.save(newData)
  }

  async delete(id: number) {
    return await this.aboutModel.delete(id)
  }

  async update(id: number, data: AboutI) {
    return await this.aboutModel.update({ id }, data)
  }
}