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

  /**
   * @param page 
   * @returns 
   */
  async create(page: PageI) {
    const data = this.PageModel.create(page)
    return await this.PageModel.save(data)
  }

  /**
   * @param id 
   * @param page 
   * @returns 
   */
  async update(id: number, page: PageI) {
    return await this.PageModel.update(id, page)
  }

  /**
   * @param id 
   * @returns 
   */
  async delete(id: number) {
    return await this.PageModel.delete(id)
  }

  /**
   * @returns Pages []
   */
  async find() {
    return await this.PageModel.find({
      relations: [
        'hero', 'hero.subcontent', 'tabs', 'tabs.isLink',
        'about', 'owner', 'aboutInformation', 'jurnal', 'jurnal.jurnalabout',
        'jurnal.jurnalabout.address', 'vestnik',
        'elibrary', 'elibrary.categories', 'elibrary.categories.books',
        'elibrary.categories.books.category', "arrivals", "arrivals.link",
        "arrivalImage"
      ],
      order: {
        id: 'ASC',
        hero: {
          subcontent: { id: 'ASC' }
        }
      }
    })
  }

  /**
   * @param id 
   * @returns Page 
   */
  async findOne(id: number) {
    return await this.PageModel.findOne({
      where: { id },
      relations: [
        'hero', 'hero.subcontent', 'tabs', 'tabs.isLink',
        'about', 'owner', 'aboutInformation', 'jurnal', 'jurnal.jurnalabout',
        'jurnal.jurnalabout.address', 'vestnik',
        'elibrary', 'elibrary.categories', 'elibrary.categories.books',
        'elibrary.categories.books.category', "arrivals", "arrivals.link",
        "arrivalImage"
      ],
      order: {
        id: 'ASC',
        hero: {
          subcontent: { id: 'ASC' }
        }
      }
    })
  }
}