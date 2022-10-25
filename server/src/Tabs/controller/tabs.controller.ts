import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TabsI, IsLinkI } from "../interface/tabs.interface";
import { TabsService } from "../service/tabs.service";

@Controller('tabs')
export class TabsController {

  constructor(private readonly tabsService: TabsService) { }

  @Post(':id')
  create(
    @Param('id') id: number,
    @Body() tabs: TabsI
  ) {
    return this.tabsService.create(id, tabs)
  }

  @Put('/update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() tabs: TabsI
  ) {
    return this.tabsService.update(id, tabs)
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tabsService.delete(id)
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tabsService.findOne(id)
  }

  @Get()
  find() {
    return this.tabsService.find()
  }

  @Post('/link/create/:id')
  createLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() tabsLink: IsLinkI
  ) {
    return this.tabsService.createLinkTabs(id, tabsLink)
  }

  @Put('/link/update/:id')
  updateLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() tabsLink: IsLinkI
  ) {
    return this.tabsService.updateLinkTabs(id, tabsLink)
  }

  @Delete('/link/delete/:id')
  deleteLink(@Param('id', ParseIntPipe) id: number) {
    return this.tabsService.deleteTabsLink(id)
  }
}