import { Body, UsePipes, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common/pipes";
import { PageI } from "../interface/page.interface";
import { PagesService } from "../service/pages.service";

@Controller('page')
export class PagesController {

  constructor(private readonly pageService: PagesService) { }

  /**
   * @param page 
   */
  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body() page: PageI) {
    return this.pageService.create(page)
  }

  /**
   * @param id 
   * @param page 
   * @returns 
   */
  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() page: PageI) {
    return this.pageService.update(id, page)
  }

  /**
   * @returns  Page []
   */
  @Get()
  find() {
    return this.pageService.find()
  }

  /**
   * @param id 
   * @returns Page
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pageService.findOne(id)
  }

}