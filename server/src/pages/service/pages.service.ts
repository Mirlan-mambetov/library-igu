import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PageEntity } from "../entities/Page";
import { PageI } from "../interface/page.interface";

@Injectable()
export class PagesService {

  constructor(
    @InjectRepository(PageEntity) private readonly PageModel: Repository<PageEntity>
  ) { }

  async create(page: PageI) {
    const data = this.PageModel.create(page)
    return await this.PageModel.save(data)
  }

  async update(id: number, page: PageI) {
    return await this.PageModel.update(id, page)
  }

  async delete(id: number) {
    return await this.PageModel.delete(id)
  }

  async find() {
    return await this.PageModel.find({
      relations: [
        'hero', 'hero.subcontent',
        'tabs', 'tabs.isLink', 'about',
        'owner', 'aboutInformation',
        'jurnal', 'jurnal.jurnalabout',
        'jurnal.jurnalabout.address', 'vestnik'
      ],
      order: {
        id: 'ASC'
      }
    })
  }

  async findOne(id: number) {
    return await this.PageModel.findOne({
      where: { id },
      relations: [
        'hero', 'hero.subcontent', 'tabs', 'tabs.isLink',
        'about', 'owner', 'aboutInformation', 'jurnal', 'jurnal.jurnalabout',
        'jurnal.jurnalabout.address', 'vestnik'
      ]
    })
  }
}