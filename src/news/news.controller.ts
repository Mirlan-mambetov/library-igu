import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, Req, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, renameFIleName } from 'src/utils/fileupload.utils';
import { NEWS_UPLOADS_FILES } from './constance/destination.constance';
import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: `${NEWS_UPLOADS_FILES}`,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  @HttpCode(200)
  create(
    @Body() dto: NewsDto,
    @Req() req: Express.Request, 
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!req.file) throw new BadRequestException("Выберите изображение")
    return this.newsService.create(dto, file.filename)
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: `${NEWS_UPLOADS_FILES}`,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: NewsDto,
    @Req() req: Express.Request, 
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!req.file) throw new BadRequestException("Выберите изображение")
    return this.newsService.update(id, dto, file.filename)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.delete(id)
  }

  @Get('news/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.newsService.findOne(id)
  }

  @Get()
  findAll() {
    return this.newsService.findAll()
  }
}
