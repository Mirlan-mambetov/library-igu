import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PAGE_NOT_FOUND } from "src/pages/constants/pages.constans";
import { PageEntity } from "src/pages/entities/Page";
import { Repository } from "typeorm";
import { TABS_NOT_FOUND } from "../constans/tabs.constans";
import { IslinkEntity } from "../entities/Islink";
import { TabsEntity } from "../entities/Tabs";
import { IsLinkI, TabsI } from "../interface/tabs.interface";

@Injectable()
export class TabsService {

  constructor(
    @InjectRepository(TabsEntity) private readonly tabsModel: Repository<TabsEntity>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>,
    @InjectRepository(IslinkEntity) private readonly isLinkTabsModel: Repository<IslinkEntity>
  ) { }

  async create(id: number, tabs: TabsI) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND, HttpStatus.BAD_REQUEST)
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

  async createLinkTabs(id: number, tabsLink: IsLinkI) {
    const tabs = await this.tabsModel.findOne({ where: { id } })
    if (!tabs) throw new HttpException(TABS_NOT_FOUND, HttpStatus.BAD_REQUEST)
    const newLink = this.isLinkTabsModel.create({
      ...tabsLink,
      tabs
    })
    return await this.isLinkTabsModel.save(newLink)
  }

  updateLinkTabs(id: number, tabsLink: IsLinkI) {
    return this.isLinkTabsModel.update(id, tabsLink)
  }

  deleteTabsLink(id: number) {
    return this.isLinkTabsModel.delete(id)
  }
}