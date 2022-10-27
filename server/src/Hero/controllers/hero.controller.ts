import { Controller, Body, Post, Param, Get, Put, ParseIntPipe, Delete, UsePipes, ValidationPipe } from '@nestjs/common'
import { HeroI, HeroSubContentI } from '../interfaces/hero';
import { HeroSerivce } from '../services/hero.services';

@Controller('hero')
export class HeroController {

  constructor(private readonly heroService: HeroSerivce) { }

  /**
   * @returns Hero[]
   */
  @Get()
  findAllHero() {
    return this.heroService.findAll()
  }

  /**
   * @returns Hero
   */
  @Get(':id')
  findHeroById(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.findHeroById(id)
  }

  /**
   * @param hero 
   */
  @Post(':id')
  @UsePipes(new ValidationPipe({ skipNullProperties: true }))
  createHero(@Param('id', ParseIntPipe) id: number, @Body() hero: HeroI) {
    return this.heroService.createHero(id, hero)
  }

  /**
   * @param id
   * @param hero
   */
  @Put('update/:id')
  @UsePipes(new ValidationPipe())
  updateHero(
    @Param('id', ParseIntPipe) id: number,
    @Body() hero: HeroI
  ) {
    return this.heroService.updateHero(id, hero)
  }

  /**
   * @param id 
   * @param hero 
   */
  @Post('subcontent/:id')
  @UsePipes(new ValidationPipe())
  createSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body() hero: HeroSubContentI
  ) {
    return this.heroService.createSubcontent(id, hero)
  }

  /**
   * @param id 
   * @param content 
   */
  @Put('subcontent/update/:id')
  @UsePipes(new ValidationPipe())
  updateSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body() content: HeroSubContentI
  ) {
    return this.heroService.updateSubContent(id, content)
  }

  /**
   * @param id 
   */
  @Delete('/delete/:id')
  deleteHero(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.deleteHero(id)
  }

  /**
   * @param id 
   */
  @Delete('subcontent/delete/:id')
  deleteSubcontent(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.deleteSubContent(id)
  }
}