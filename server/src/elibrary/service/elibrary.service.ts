import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PAGE_NOT_FOUND } from "src/pages/constants/pages.constans";
import { PageEntity } from "src/pages/entities/Page";
import { Repository } from "typeorm";
import { CreateBookDto } from "../dto/create.book.dto";
import { CreateCategoryDto } from "../dto/create.category.dto";
import { CreateMainDto } from "../dto/createMaincategory.dto";
import { UpdateCategoryDto } from "../dto/update.category.dto";
import { UpdateMainDto } from "../dto/updateMainCategory.dto";
import { ElibraryEntity } from "../entities/Elibrary";
import { ElibraryBooksEntity } from "../entities/Elibrary.books";
import { ElibraryCategoriesEntity } from "../entities/elibrary.categories";

@Injectable()
export class ElibraryService {

  constructor(
    @InjectRepository(ElibraryEntity) private readonly elibraryModel: Repository<ElibraryEntity>,
    @InjectRepository(ElibraryCategoriesEntity) private readonly elibraryCategoriesModel: Repository<ElibraryCategoriesEntity>,
    @InjectRepository(ElibraryBooksEntity) private readonly elibraryBooksModel: Repository<ElibraryBooksEntity>,
    @InjectRepository(PageEntity) private readonly pageModel: Repository<PageEntity>
  ) { }


  /**
   * @param id 
   * @param createDto 
   * @returns Main categoy & Page save
   * @description param PageId body MainCategory
   */
  async createMainCategory(
    id: number,
    createDto: CreateMainDto
  ) {
    const page = await this.pageModel.findOne({ where: { id } })
    if (!page) throw new HttpException(PAGE_NOT_FOUND,
      HttpStatus.BAD_REQUEST)
    const mainCategory = this.elibraryModel.create(
      { ...createDto, page })
    if (mainCategory)
      throw new HttpException('Категория уже существует!',
        HttpStatus.BAD_REQUEST)
    return await this.elibraryModel.save(mainCategory)
  }

  /**
   * @param id 
   * @param updateMainDto 
   * @returns Main category save by id
   * @description ID is main category
   */
  async updateMainCategory(
    id: number,
    updateMainDto: UpdateMainDto
  ) {
    return await this.elibraryModel.update(id, updateMainDto)
  }

  /**
   * @param id Page ID
   * @param categoryDto 
   * @returns Category
   */
  async createCategories(id: number, categoryDto: CreateCategoryDto) {
    const mainCategory = await this.elibraryModel.findOne({ where: { id } })
    if (!mainCategory)
      throw new HttpException('Категория не существует по такому ID',
        HttpStatus.BAD_REQUEST)
    const category = this.elibraryCategoriesModel.create({
      ...categoryDto,
      categories: mainCategory
    })
    return await this.elibraryCategoriesModel.save(category)
  }

  /**
   * @param id Category ID
   * @param categoryDto 
   * @returns 
   */
  async updateCategories(id: number, categoryDto: UpdateCategoryDto) {
    const category = await this.elibraryCategoriesModel.findOne({ where: { id } })
    if (!category)
      throw new HttpException('Категория не существует по такому ID',
        HttpStatus.BAD_REQUEST)
    return await this.elibraryCategoriesModel.update(id, categoryDto)
  }

  async createBook(id: number, bookDto: CreateBookDto) {
    const category = await this.elibraryCategoriesModel.findOne({ where: { id } })
    if (!category)
      throw new HttpException('Категория не существует по такому ID',
        HttpStatus.BAD_REQUEST)
    const book = this.elibraryBooksModel.create({ ...bookDto, category })
    return await this.elibraryBooksModel.save(book)
  }
}