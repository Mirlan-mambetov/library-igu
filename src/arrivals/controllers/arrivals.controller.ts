import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Put, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter, renameFIleName } from 'src/utils/fileuploads.utils';
import { BOOKS_CARDS_UPLOAD } from '../constans/destination.constance';
import { ArrivalI } from '../interfaces/arrival.interface';
import { ArrivalsLinkI } from '../interfaces/arrivalsLink.interface';
import { ImageI } from '../interfaces/image.interface';
import { ArrivalsServices } from '../services/arrivals.service';

@Controller('arrivals')
export class ArrivalsController {

  constructor(private readonly arrivalsService: ArrivalsServices) { }

  /**
   */
  @Get('/images')
  findAllImage() {
    return this.arrivalsService.findAllImage()
  }

  /**
   * @param image
   * @param pageId  
   */
  @Post('/image/create/:id')
  createImage(
    @Param('id', ParseIntPipe) id: number,
    @Body() image: ImageI
  ) {
    return this.arrivalsService.createImage(id, image)
  }

  @Put('/image/update/:id')
  @UseInterceptors(FileInterceptor("image", {
    storage: diskStorage({
      destination: BOOKS_CARDS_UPLOAD,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: imageFileFilter
  }))
  updateArrivalImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.arrivalsService.updateArrivalImage(id, image.filename)
  }

  /**
   * @returns 
   */
  @Get()
  findAllArrivals() {
    return this.arrivalsService.findAllArrivals()
  }

  /**
   * @param arrival
   * @param pageId
   */
  @Post('/create/:id')
  createArrival(
    @Param('id', ParseIntPipe) id: number,
    @Body() arrival: ArrivalI
  ) {
    return this.arrivalsService.createArrival(id, arrival)
  }

  @Put('/update/:id')
  updateArrival(
    @Param('id', ParseIntPipe) id: number,
    @Body() arrival: ArrivalI
  ) {
    return this.arrivalsService.updateArrival(id, arrival)
  }

  /**
   * @param id 
   * @param data 
   */
  @Post('/link/create/:id')
  createArrivalLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArrivalsLinkI
  ) {
    return this.arrivalsService.createArrivalsLink(id, data)
  }

  /**
   * @param id 
   * @param data 
   */
  @Put('/link/update/:id')
  updateArrivalLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ArrivalsLinkI
  ) {
    return this.arrivalsService.updateArrivalLink(id, data)
  }

}