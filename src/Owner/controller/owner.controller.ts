import { Controller, Post, Put, Param, Body, ParseIntPipe } from '@nestjs/common'
import { OwnerI } from '../interface/owner.interface';
import { OwnerService } from '../service/owner.service';


@Controller('owner')
export class OwnerController {

  constructor(private readonly ownerService: OwnerService) { }

  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number, @Body() owner: OwnerI) {
    return this.ownerService.create(id, owner)
  }

  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() owner: OwnerI) {
    return this.ownerService.update(id, owner)
  }

}