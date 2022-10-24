import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ArrivalI } from '../interfaces/arrival.interface';
import { ArrivalsLinkI } from '../interfaces/arrivalsLink.interface';
import { ImageI } from '../interfaces/image.interface';
import { ArrivalsServices } from '../services/arrivals.service';

@Controller('arrivals')
export class ArrivalsController {

  constructor(private readonly arrivalsService: ArrivalsServices) { }

  /**
   */
  @Get('images')
  findAllImage() {
    return this.arrivalsService.findAllImage()
  }

  /**
   * @param image 
   */
  @Post('/image/create')
  createImage(
    @Body() image: ImageI
  ) {
    return this.arrivalsService.createImage(image)
  }

  /**
   * @returns 
   */
  @Get('')
  findAllArrivals() {
    return this.arrivalsService.findAllArrivals()
  }

  /**
   * @param arrival 
   */
  @Post('/create')
  createArrival(
    @Body() arrival: ArrivalI
  ) {
    return this.arrivalsService.createArrival(arrival)
  }

  /**
   * @param id 
   * @param data 
   */
  @Post('/link/create/:id')
  createArrivalLink(
    @Param('id') id: number,
    @Body() data: ArrivalsLinkI
  ) {
    return this.arrivalsService.createArrivalsLink(id, data)
  }

}