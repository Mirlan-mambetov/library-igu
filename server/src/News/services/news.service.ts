import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsE } from '../entities/news';
import { NewsI } from '../interfaces/news.interface';


@Injectable()
export class NewsService {

  constructor(@InjectRepository(NewsE) private readonly newsModel: Repository<NewsE>) { }

  /**
   * @returns news []
   */
  findAll() {
    return this.newsModel.find()
  }

  /**
   * @param id 
   * @returns news
   */
  findOne(id: number) {
    return this.newsModel.findOne({ where: { id } })
  }

  /**
   * @param news 
   */
  create(news: NewsI) {
    return this.newsModel.save(news)
  }

  /**
   * @param id 
   * @param news 
   */
  updateNews(id: number, news: NewsI) {
    return this.newsModel.update({ id }, news)
  }

  /**
   * @param id 
   */
  deleteNews(id: number) {
    return this.newsModel.delete({ id })
  }
}