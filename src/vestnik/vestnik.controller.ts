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
  Req,
  HttpCode
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
  @HttpCode(200)
  create(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Body() dto: IVestnikDto
  ) {
    return this.vestnikService.create(pageId, dto)
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikDto
  ) {
    return this.vestnikService.update(id, dto)
  }

  @Get(':id')
  @HttpCode(200)
  findVestnikById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.vestnikService.findVestnikById(id)
  }

  @Get('materials')
  @HttpCode(200)
  findAllMaterials() {
    return this.vestnikService.findVestnikMaterials()
  }

  @Get('material/:id')
  @HttpCode(200)
  findAllMaterialById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.vestnikService.findVestnikMaterialsById(id)
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
  @HttpCode(200)
  createMaterial(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikMaterialDto,
    @Req() req: Express.Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!req.file) throw new NotFoundException("Файл не выбран")
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
  @HttpCode(200)
  updateMaterial(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: IVestnikMaterialDto,
    @Req() req: Express.Request,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (!req.file) throw new NotFoundException("Файл не выбран")
    return this.vestnikService.updateMaterial(id, dto, file.filename)
  }

  @Delete('material/:id')
  @HttpCode(204)
  deleteMaterial(@Param('id', ParseIntPipe) id: number) {
    return this.vestnikService.deleteMaterial(id)
  }
}
