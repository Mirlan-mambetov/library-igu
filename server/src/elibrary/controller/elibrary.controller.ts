import { Body, Controller, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateBookDto } from "../dto/create.book.dto";
import { CreateCategoryDto } from "../dto/create.category.dto";
import { CreateMainDto } from "../dto/createMaincategory.dto";
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

  @Put('/update/:id')
  @UsePipes(new ValidationPipe({ skipUndefinedProperties: true }))
  updateMainCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMainDto: UpdateMainDto
  ) {
    return this.elibraryService.updateMainCategory(id, updateMainDto)
  }

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

  @Post('/books/create/:id')
  createBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() createBookDto: CreateBookDto
  ) {
    return this.elibraryService.createBook(id, createBookDto)
  }
}