import { Controller, UsePipes, ValidationPipe, Get, Param, Post, Body, ParseIntPipe, Put, Delete } from "@nestjs/common";
import { CREATED_NEWS, DELETED_NEWS, UPDATED_NEWS } from "../constans/messages.constans";
import { CreateNewsDto } from "../dto/create.news.dto";
import { UpdateNewsDto } from "../dto/update.news.dto";
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
  @UsePipes(new ValidationPipe())
  createNews(@Body() newsDto: CreateNewsDto) {
    this.newsService.create(newsDto)
    return { message: CREATED_NEWS }
  }


  /**
   * @param id 
   * @param news 
   */
  @Put('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() newsDto: UpdateNewsDto
  ) {
    const news = await this.newsService.updateNews(id, newsDto)
    if (!news) {
      return news
    } else {
      return { message: UPDATED_NEWS }
    }
  }


  /**
   * @param id 
   */
  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.newsService.deleteNews(id)
    return { message: DELETED_NEWS }
  }
}