import { Controller, Post, Get, Param, Body, Delete, Put, ParseIntPipe } from '@nestjs/common'
import { ImageboxI } from '../interface/imagebox.interface';
import { ImageboxService } from '../service/imagebox.service';

@Controller('imagebox')
export class ImageboxController {

  constructor(private readonly imageboxService: ImageboxService) { }

  @Post()
  create(@Body() data: ImageboxI) {
    return this.imageboxService.create(data)
  }

  @Get()
  findALl() {
    return this.imageboxService.findAll()
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.imageboxService.findOne(id)
  }

  @Put('/update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ImageboxI
  ) {
    return this.imageboxService.update(id, data)
  }

  @Delete('/delete/:id')
  delete(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.imageboxService.delete(id)
  }
}