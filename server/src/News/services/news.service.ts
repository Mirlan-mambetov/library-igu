import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NEWS_NOT_FOUND } from '../constans/messages.constans';
import { CreateNewsDto } from '../dto/create.news.dto';
import { UpdateNewsDto } from '../dto/update.news.dto';
import { NewsE } from '../entities/news';


@Injectable()
export class NewsService {

  constructor(@InjectRepository(NewsE) private readonly newsModel: Repository<NewsE>) { }

  /**
   * @returns news []
   */
  findAll() {
    return this.newsModel.find({
      order: {
        id: 'ASC'
      }
    })
  }

  /**
   * @param id 
   * @returns news
   */
  async findOne(id: number) {
    const findNews = await this.newsModel.findOne({ where: { id } })
    if (!findNews) throw new HttpException(NEWS_NOT_FOUND, HttpStatus.BAD_REQUEST)
    return findNews
  }

  /**
   * @param news 
   */
  async create(newsDto: CreateNewsDto) {
    return await this.newsModel.save(newsDto)
  }

  /**
   * @param id 
   * @param news 
   */
  async updateNews(id: number, newsDto: UpdateNewsDto) {
    const news = await this.newsModel.findOne({ where: { id } })
    if (!news) throw new HttpException(NEWS_NOT_FOUND, HttpStatus.BAD_REQUEST)
    return await this.newsModel.update({ id }, newsDto)
  }

  /**
   * @param id 
   */
  async deleteNews(id: number) {
    const news = await this.newsModel.findOne({ where: { id } })
    if (!news) throw new HttpException(NEWS_NOT_FOUND, HttpStatus.BAD_REQUEST)
    return await this.newsModel.delete({ id })
  }
}