import { 
  Controller,
  Post,
  Put,
  Get,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  Req
 } from '@nestjs/common';
import { VestnikService } from './vestnik.service';
import {IVestnikDto} from './dto/vestnik.dto'
import {IVestnikMaterialDto} from './dto/vestnik.material.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer';
import { fileFileFilter, renameFIleName } from 'src/utils/fileupload.utils';
import { VESTNIK_UPLOADS_IMAGE } from './constance/destination.constance';

@Controller('vestnik')
export class VestnikController {
  constructor(private readonly vestnikService: VestnikService) {}


  @Post(':pageId')
  @UsePipes(new ValidationPipe())
  create(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Body() dto: IVestnikDto
  ) {
    return this.vestnikService.create(pageId, dto)
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikDto
  ) {
    return this.vestnikService.update(id, dto)
  }

  @Post('material/:id')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: `${VESTNIK_UPLOADS_IMAGE}`,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: fileFileFilter
  }))
  createMaterial(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikMaterialDto,
    @Req() req: Express.Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!req.file) throw new NotFoundException("Файл не выбран")
    console.log(dto, file)
    return this.vestnikService.createMaterial(id, dto, file.filename)
  }

  @Put('material/:id')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: `${VESTNIK_UPLOADS_IMAGE}`,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: fileFileFilter
  }))
  updateMaterial(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikMaterialDto,
    @Req() req: Express.Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!req.file) throw new NotFoundException("Файл не выбран")
    console.log(dto, file)
    return this.vestnikService.updateMaterial(id, dto, file.filename)
  }

  @Delete('material/:id')
  deleteMaterial(@Param('id', ParseIntPipe) id: number) {
    return this.vestnikService.deleteMaterial(id)
  }
}
