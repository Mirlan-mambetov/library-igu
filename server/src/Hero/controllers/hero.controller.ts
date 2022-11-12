import {
  Controller, Body, Post, Put,
  Delete, Param, Get, ParseIntPipe,
  UploadedFile, UsePipes, ValidationPipe,
  UseInterceptors, ParseFilePipe
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, renameFIleName } from 'src/utils/fileuploads.utils';
import { CreateHeroDto } from '../dto/create.hero.dto';
import { CreateSubcontentDto } from '../dto/create.subcontent.dto';
import { UpdateHeroDto } from '../dto/update.hero.dto';
import { UpdateSubcontentDto } from '../dto/update.subcontent.dto';
import { HeroSerivce } from '../services/hero.services';

@Controller('hero')
export class HeroController {

  constructor(private readonly heroService: HeroSerivce) { }

  /**
   * @description find all hero data
   * @returns Hero[]
   */
  @Get()
  findAllHero() {
    return this.heroService.findAll()
  }

  /**
   * @description Find Hero by id
   * @returns Hero
   */
  @Get(':id')
  findHeroById(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.findHeroById(id)
  }

  /**
   * @description create hero
   * @param hero 
   */
  @Post(':id')
  @UsePipes(new ValidationPipe({
    skipMissingProperties: true
  }))
  @UseInterceptors(FileInterceptor('background', {
    storage: diskStorage({
      destination: "./uploads/heroimages",
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  createHero(
    @Param('id', ParseIntPipe) id: number,
    @Body() heroDto: CreateHeroDto,
    @UploadedFile() background: Express.Multer.File
  ) {
    return this.heroService.createHero(id, heroDto, background.filename)
  }

  /**
   * @description update hero
   * @param id
   * @param hero
   */
  @Put('update/:id')
  @UsePipes(new ValidationPipe({
    skipMissingProperties: true
  }))
  @UseInterceptors(FileInterceptor('background', {
    storage: diskStorage({
      destination: "./uploads/heroimages",
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  updateHero(
    @Param('id', ParseIntPipe) id: number,
    @Body() heroDtoUpdate: UpdateHeroDto,
    @UploadedFile() background: Express.Multer.File
  ) {
    return this.heroService.updateHero(id, heroDtoUpdate, background.filename)
  }

  /**
   * @description create subcontent to hero
   * @param id 
   */
  @Post('subcontent/:id')
  @UsePipes(new ValidationPipe({
    skipUndefinedProperties: true
  }))
  createSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body() subcontentDto: CreateSubcontentDto
  ) {
    return this.heroService.createSubcontent(id, subcontentDto)
  }

  /**
   * @description update subcontent to hero
   * @param id 
   * @param content 
   */
  @Put('subcontent/update/:id')
  @UsePipes(new ValidationPipe({ skipUndefinedProperties: true }))
  updateSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body() contentDto: UpdateSubcontentDto
  ) {
    return this.heroService.updateSubContent(id, contentDto)
  }

  /**
   * @description delete subcontent in hero
   * @param id 
   */
  @Delete('subcontent/delete/:id')
  deleteSubcontent(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.deleteSubContent(id)
  }
}