import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Put } from '@nestjs/common/decorators';
import { ParseIntPipe } from '@nestjs/common/pipes';
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
  updateArrivalImage(
    @Param('id', ParseIntPipe) id: number,
    @Body() image: ImageI
  ) {
    return this.arrivalsService.updateArrivalImage(id, image)
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