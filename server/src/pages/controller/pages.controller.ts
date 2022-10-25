import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PageI } from "../interface/page.interface";
import { PagesService } from "../service/pages.service";

@Controller('page')
export class PagesController {

  constructor(private readonly pageService: PagesService) { }

  @Post('/create')
  create(@Body() page: PageI) {
    return this.pageService.create(page)
  }

  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() page: PageI) {
    return this.pageService.update(id, page)
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.pageService.delete(id)
  }

  @Get()
  find() {
    return this.pageService.find()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pageService.findOne(id)
  }

}