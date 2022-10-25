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

  create(page: PageI) {
    const data = this.PageModel.create(page)
    return this.PageModel.save(data)
  }
  update(id: number, page: PageI) {
    return this.PageModel.update(id, page)
  }
  delete(id: number) {
    return this.PageModel.delete(id)
  }
  find() {
    return this.PageModel.find({ relations: ['hero', 'hero.subcontent', 'tabs', 'tabs.isLink'] })
  }
  findOne(id: number) {
    return this.PageModel.findOne({ where: { id }, relations: ['hero', 'hero.subcontent'] })
  }
}