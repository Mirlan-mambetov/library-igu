import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { PAGE_NOT_FOUND } from 'src/pages/constants/pages.constans';
import { PageEntity } from 'src/pages/entities/Page';
import { Repository } from 'typeorm';
import { OwnerEntity } from '../entities/Owner';
import { OwnerI } from '../interface/owner.interface';

@Injectable()
export class OwnerService {

  constructor(
    @InjectRepository(OwnerEntity) private readonly ownerModel: Repository<OwnerEntity>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>
  ) { }

  async create(id: number, owner: OwnerI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const ownerData = this.ownerModel.create(owner)
    const saveOnwer = await this.ownerModel.save(ownerData)
    page.owner = saveOnwer
    return await this.pageModel.save(page)
  }

  async update(id: number, ownerData: OwnerI) {
    return await this.ownerModel.update(id, ownerData)
  }
}