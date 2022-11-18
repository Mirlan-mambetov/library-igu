import { Controller, Post, Put, Delete, Body, Param, ParseIntPipe, Get } from "@nestjs/common";
import { VestnikArhivI, VestnikI } from "../interface/vestnik.interface";
import { VestnikService } from "../services/vestnik.service";

@Controller('vestnik')
export class VestnikController {

  constructor(private readonly vestnikService: VestnikService) { }

  @Get()
  find() {
    return this.vestnikService.find()
  }

  @Get('/one/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vestnikService.findOne(id)
  }

  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number, @Body() data: VestnikI) {
    return this.vestnikService.create(id, data)
  }

  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: VestnikI) {
    return this.vestnikService.update(id, data)
  }

  @Post('/arhiv/create/:id')
  createArhiv(@Param('id', ParseIntPipe) id: number, @Body() data: VestnikArhivI) {
    return this.vestnikService.createArhivVestnik(id, data)
  }

  @Put('/arhiv/update/:id')
  updateArhiv(@Param('id', ParseIntPipe) id: number, @Body() data: VestnikArhivI) {
    return this.vestnikService.updateArhivVestnik(id, data)
  }

  @Get('/arhivs/all')
  findAllArhivs() {
    return this.vestnikService.findAllArhiv()
  }

  @Get('/arhiv/:id')
  findOneArhiv(@Param('id', ParseIntPipe) id: number) {
    return this.vestnikService.findOneArhiv(id)
  }
}