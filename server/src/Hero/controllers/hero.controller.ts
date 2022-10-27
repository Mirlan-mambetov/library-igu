import { Controller, Body, Post, Param, Get, Put, ParseIntPipe, Delete, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreateHeroDto } from '../dto/create.hero.dto';
import { CreateSubcontentDto } from '../dto/create.subcontent.dto';
import { UpdateHeroDto } from '../dto/update.hero.dto';
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
  createHero(
    @Param('id', ParseIntPipe) id: number,
    @Body() heroDto: CreateHeroDto) {
    return this.heroService.createHero(id, heroDto)
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
  updateHero(
    @Param('id', ParseIntPipe) id: number,
    @Body() heroDtoUpdate: UpdateHeroDto
  ) {
    return this.heroService.updateHero(id, heroDtoUpdate)
  }

  /**
   * @description create subcontent to hero
   * @param id 
   * @param hero 
   */
  @Post('subcontent/:id')
  @UsePipes(new ValidationPipe())
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
  @UsePipes(new ValidationPipe())
  updateSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body() content: CreateSubcontentDto
  ) {
    return this.heroService.updateSubContent(id, content)
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