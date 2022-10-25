import { Controller, Post, Get, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common'
import { AboutI } from '../interface/about.interface';
import { AboutService } from '../service/about.service';

@Controller('about')
export class AboutController {

  constructor(private readonly aboutService: AboutService) { }

  @Post(':id')
  create(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: AboutI
  ) {
    return this.aboutService.create(id, data)
  }

  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: AboutI) {
    return this.aboutService.update(id, data)
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.aboutService.delete(id)
  }
}