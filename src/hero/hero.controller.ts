import { Controller, UsePipes, ValidationPipe, HttpCode, Post, Put, Delete, Body, Param, ParseIntPipe, UseInterceptors, BadRequestException } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, renameFIleName } from 'src/utils/fileupload.utils';
import { HERO_NOT_FILE_IMAGE, HERO_UPLOADS_IMAGE } from './constance/hero.constance';
import { HeroDto } from './dto/hero.dto';
import { HeroSubcontentDto } from './dto/HeroSubcontentDto'
import { HeroService } from './hero.service';
import {IHeroCreateDto} from './dto/hero.create.dto'

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) { }


  @Post(':pageId')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor("background", {
    storage: diskStorage({
      destination: HERO_UPLOADS_IMAGE,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  @HttpCode(200)
  createHero(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Body() dto: HeroDto,
    @UploadedFile() background: Express.Multer.File
  ) {
    if (!background) throw new BadRequestException(HERO_NOT_FILE_IMAGE)
    console.log(pageId, dto, background)    
    return this.heroService.createHero(pageId, {...dto, background: background.filename})
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  updateHero(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) dto: HeroDto,
  ) {
    return this.heroService.updateHero(id, {...dto})
  }

  @Put('image/:id')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor("background", {
    storage: diskStorage({
      destination: HERO_UPLOADS_IMAGE,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  updateHeroImage(
    @Param('id') id: number,
    @UploadedFile() background: Express.Multer.File) {
    if (!background) throw new BadRequestException(HERO_NOT_FILE_IMAGE)
    console.log(id, background)
    return this.heroService.updateHeroImage(id, background.filename)
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
