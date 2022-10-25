import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { Repository } from "typeorm";
import { TabsEntity } from "../entities/Tabs";
import { TabsI } from "../interface/tabs.interface";

@Injectable()
export class TabsService {

  constructor(
    @InjectRepository(TabsEntity) private readonly tabsModel: Repository<TabsEntity>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>
  ) { }

  async create(id: number, tabs: TabsI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException('Страница с таким id не найден', HttpStatus.BAD_REQUEST)
    const tabsData = this.tabsModel.create({
      ...tabs,
      page
    })
    return await this.tabsModel.save(tabsData)
  }

  update(id: number, tabs: TabsI) {
    return this.tabsModel.update({ id }, tabs)
  }

  delete(id: number) {
    return this.tabsModel.delete(id)
  }

  findOne(id: number) {
    return this.tabsModel.findOne({ where: { id } })
  }

  find() {
    return this.tabsModel.find()
  }
}