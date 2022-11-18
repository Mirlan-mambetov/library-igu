import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { JurnalAboutAddressI, JurnalAboutI, JurnalI } from "../interface/jurnal.interface";
import { JurnalService } from "../service/jurnal.service";

@Controller('jurnal')
export class JurnalController {

  constructor(
    private readonly jurnalService: JurnalService
  ) { }

  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number, @Body() jurnal: JurnalI) {
    return this.jurnalService.create(id, jurnal)
  }

  @Put('/update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() jurnal: JurnalI) {
    return this.jurnalService.update(id, jurnal)
  }

  @Post('/create/jurnalabout/:id')
  createJurnalAbout(
    @Param('id', ParseIntPipe) id: number,
    @Body() jurnalAbout: JurnalAboutI) {
    return this.jurnalService.createJurnalAbout(id, jurnalAbout)
  }

  @Put('/update/jurnalabout/:id')
  updateJurnalAbout(
    @Param('id', ParseIntPipe) id: number,
    @Body() jurnalAbout: JurnalAboutI) {
    return this.jurnalService.updateJurnalAbout(id, jurnalAbout)
  }

  @Post('/create/jurnalabout/address/:id')
  createJurnalAboutAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() jurnalAboutAddress: JurnalAboutAddressI[]) {
    return this.jurnalService.createJurnalAboutAddress(id, jurnalAboutAddress)
  }

  @Put('/update/jurnalabout/address/:id')
  updateJurnalAboutAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() jurnalAboutAddress: JurnalAboutAddressI) {
    return this.jurnalService.updateJurnalAboutAddress(id, jurnalAboutAddress)
  }


}