import { Controller, Get, Param, Post, Body, ParseIntPipe, Put, Delete } from "@nestjs/common";
import { NewsI } from "../interfaces/news.interface";
import { NewsService } from "../services/news.service";

@Controller('news')
export class NewsController {

  constructor(private readonly newsService: NewsService) { }

  /**
   * @returns news []
   */
  @Get()
  findAll() {
    return this.newsService.findAll()
  }

  /**
   * @param id 
   * @returns news
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }

  /**
   * @param news 
   * @returns 
   */
  @Post('create')
  createNews(@Body() news: NewsI) {
    return this.newsService.create(news)
  }


  /**
   * @param id 
   * @param news 
   */
  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() news: NewsI
  ) {
    return this.newsService.updateNews(id, news)
  }


  /**
   * @param id 
   */
  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.newsService.deleteNews(id)
  }
}