import { Controller, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { filesFileFilter, renameFIleName } from 'src/utils/fileupload.utils';
import { TABS_UPLOADS_FILES } from './constance/destination.constance';
import { TabsDto, TabsLinkDto } from './dto/tabs.dto';
import { TabsService } from './tabs.service';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Post(':pageId')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  createTab(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Body() dto: TabsDto
  ) {
    return this.tabsService.createTab(pageId, dto)
  }

  @Put(':id')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  updateTab(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: TabsDto
  ) {
    return this.tabsService.updateTab(id, dto)
  }

  @Post('tablink/:id')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: TABS_UPLOADS_FILES,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: filesFileFilter
  }))
  createTabLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: TabsLinkDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.tabsService.createTabLink(id, {...dto, link: file.filename})
  }
  
  @Put('tablink/:id')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: TABS_UPLOADS_FILES,
      filename: (req, file, cb) => renameFIleName(req, file, cb)
    }),
    fileFilter: filesFileFilter
  }))
  updateTabLink(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: TabsLinkDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log(dto.name, file)    
    return this.tabsService.updateTabLink(id, {...dto, link: file.filename})
  }

  @Delete('tablink/:id')
  deleteTabLink(
    @Param('id') id: number
  ) {
    return this.tabsService.deleteTabLink(id)
  }
}
