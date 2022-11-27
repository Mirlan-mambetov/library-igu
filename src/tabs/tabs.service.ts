import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PAGE_NOT_FOUND } from 'src/page/constance/page.message.constance';
import { PageEntity } from 'src/page/entity/page.entity';
import { deleteFileWithName } from 'src/utils/fileupload.utils';
import { Repository } from 'typeorm';
import { TABS_GET_UPLOADS_FILES, TABS_UPLOADS_FILES } from './constance/destination.constance';
import { TabsDto, TabsLinkDto } from './dto/tabs.dto';
import { TabsEntity } from './entity/tabs.entity';
import { TabsLinkEntity } from './entity/tabs.islink';

@Injectable()
export class TabsService {

  constructor(
    @InjectRepository(TabsEntity) private readonly tabsRepository: Repository<TabsEntity>,
    @InjectRepository(TabsLinkEntity) private readonly tabsLinkRepository: Repository<TabsLinkEntity>,
    @InjectRepository(PageEntity) private readonly pageRepository: Repository<PageEntity>,
  ) {}

  async findTabById(id: number) {
    const tabs = await this.tabsRepository.findOne({
      where: {id},
      relations: {
        isLink: true
      },
      order: {
        id: 'ASC',
        isLink: {
          updatedAt: "ASC"
        }
      }
    })
    if (!tabs) throw new BadRequestException("Таб с таким ID не найден")
    return tabs
  }

  async findTabLinkById(id: number) {
    const tabsLink = await this.tabsLinkRepository.findOne({
      where: {id},
      relations: {
        tabs: true
      },
      order: {
        id: 'DESC'
      }
    })
    if (!tabsLink) throw new BadRequestException("Таб линк с таким ID не найден")
    return tabsLink
  }

  async createTab(pageId: number, dto: TabsDto) {
    const page = await this.pageRepository.findOne({where: {id: pageId}})
    if (!page) throw new NotFoundException(PAGE_NOT_FOUND)
    const newData = this.tabsRepository.create({
      ...dto,
      page
    })
    return await this.tabsRepository.save(newData)
  }

  async updateTab(id: number, dto: TabsDto) {
    const tab = await this.findTabById(id)
    return await this.tabsRepository.save({
      ...tab,
      ...dto
    })
  }

  async createTabLink(tabId: number, dto: TabsLinkDto) {
    const tab = await this.findTabById(tabId)
    const newData = this.tabsLinkRepository.create({
      ...dto,
      link: `${TABS_GET_UPLOADS_FILES}/${dto.link}`,
      tabs: tab
    })
    return await this.tabsLinkRepository.save(newData)
  }

  async updateTabLink(id: number, dto: TabsLinkDto) {
    const tabLink = await this.findTabLinkById(id)
    await deleteFileWithName(tabLink.link)
    return await this.tabsLinkRepository.save({
      ...tabLink,
      ...dto,
      link: `${TABS_GET_UPLOADS_FILES}/${dto.link}`
    })
  }

  async deleteTabLink(id: number) {
    return await this.tabsLinkRepository.delete(id)
  }
}
