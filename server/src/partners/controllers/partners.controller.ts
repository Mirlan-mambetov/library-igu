import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PartnersI } from '../interfaces/partners.interface';
import { PartnersService } from '../services/partners.service';

@Controller('partners')
export class PartnersController {

  constructor(private readonly partnersService: PartnersService) { }

  /**
   * @param id 
   * @returns 
   */
  @Get()
  findAll() {
    return this.partnersService.findAll()
  }

  /**
   * @param id 
   * @returns 
   */
  @Post('/create')
  createPartners(@Body() data: PartnersI) {
    return this.partnersService.createPartners(data)
  }

  /**
   * @param id 
   * @returns 
   */
  @Put('/update/:id')
  updatePartners(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: PartnersI
  ) {
    return this.partnersService.updatePartners(id, data)
  }

  /**
   * @param id 
   * @returns 
   */
  @Delete('/delete/:id')
  deletePartners(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.partnersService.deletePartners(id)
  }
}
