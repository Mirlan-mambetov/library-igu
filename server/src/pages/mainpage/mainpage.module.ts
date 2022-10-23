import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { MainPageController } from "./controllers/mainpage.controller";
import { MainpageService } from "./services/mainpage.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([])
  ],
  controllers: [MainPageController],
  providers: [MainpageService]
})
export class MainpageModule { }