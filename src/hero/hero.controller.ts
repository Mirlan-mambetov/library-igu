import { Controller,ValidationPipe, HttpCode, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import {HeroSubcontentDto} from './dto/HeroSubcontentDto'
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}


  @Post(':pageId')
  @HttpCode(200)
  createHero(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Body(new ValidationPipe()) dto: HeroDto
    ) {
    return this.heroService.createHero(pageId, dto)
  }

  @Put(':id')
  @HttpCode(200)
  updateHero(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) dto: HeroDto
  ) {
    return this.heroService.updateHero(id, dto)
  }

  @Post('subcontent/:heroId')
  @HttpCode(200)
  createHeroSubcontent(
    @Param('heroId', ParseIntPipe) heroId: number,
    @Body(new ValidationPipe()) dto: HeroSubcontentDto
  ) {
    return this.heroService.createHeroSubcontent(heroId, dto)
  }

  @Put('subcontent/:id')
  @HttpCode(200)
  updateHeroSubcontent(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) dto: HeroSubcontentDto
  ) {
    return this.heroService.updateHeroSubcontent(id, dto)
  }

  @Delete('subcontent/:id')
  deleteHeroSubcontent(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.deleteHeroSubcontent(id)
  }
}
