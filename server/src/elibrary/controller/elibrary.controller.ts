import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe, Delete } from "@nestjs/common";
import { CreateBookDto } from "../dto/create.book.dto";
import { CreateCategoryDto } from "../dto/create.category.dto";
import { CreateMainDto } from "../dto/createMaincategory.dto";
import { UpdateBookDto } from "../dto/update.book.dto";
import { UpdateCategoryDto } from "../dto/update.category.dto";
import { UpdateMainDto } from "../dto/updateMainCategory.dto";
import { ElibraryService } from "../service/elibrary.service";

@Controller('elibrary')
export class ElibraryController {


  constructor(private readonly elibraryService: ElibraryService) { }

  /**
   * @param id 
   * @param createMainDto 
   */
  @Post(':id')
  @UsePipes(new ValidationPipe())
  createMainCategory(
    @Param('id') id: number,
    @Body() createMainDto: CreateMainDto
  ) {
    return this.elibraryService.createMainCategory(id, createMainDto)
  }

  /**
   * @param id 
   * @param updateMainDto 
   */
  @Put('/update/:id')
  @UsePipes(new ValidationPipe({ skipUndefinedProperties: true }))
  updateMainCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMainDto: UpdateMainDto
  ) {
    return this.elibraryService.updateMainCategory(id, updateMainDto)
  }

  /**
   * @returns Books []
   */
  @Get()
  findMainCategory() {
    return this.elibraryService.findAllMainCategory()
  }

  /**
   * @param id 
   * @returns Book
   */
  @Get(':id')
  findOneMainCategory(@Param('id', ParseIntPipe) id: number) {
    return this.elibraryService.findOneMainCategory(id)
  }

  /**
   * @param id 
   * @param categoryDto 
   */
  @Post('/category/create/:id')
  @UsePipes(new ValidationPipe())
  createCategories(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryDto: CreateCategoryDto
  ) {
    return this.elibraryService.createCategories(id, categoryDto)
  }

  @Put('/category/update/:id')
  updateCategories(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryUpdateDto: UpdateCategoryDto
  ) {
    return this.elibraryService.updateCategories(id, categoryUpdateDto)
  }

  /**
   * @param id 
   * @param createBookDto 
   */
  @Post('/books/create/:id')
  @UsePipes(new ValidationPipe({ skipUndefinedProperties: true }))
  createBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() createBookDto: CreateBookDto
  ) {
    return this.elibraryService.createBook(id, createBookDto)
  }

  /**
   * @param id 
   * @param updateBookDto 
   * @returns 
   */
  @Put('/books/update/:id')
  @UsePipes(new ValidationPipe({ skipUndefinedProperties: true }))
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto
  ) {
    return this.elibraryService.updateBook(id, updateBookDto)
  }

  /**
   * @param id 
   * @returns 
   */
  @Delete('/books/delete/:id')
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    return this.elibraryService.deleteBook(id)
  }
}