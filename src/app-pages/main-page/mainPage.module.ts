import { Module } from "@nestjs/common"
import { MainPageController } from "./mainPage.controller"
import { MainPageService } from "./mainPage.service"

@Module({
  imports: [],
  providers: [MainPageService],
  controllers: [MainPageController]
})
export class MainPageModule { }