import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { AboutController } from "./controller/about.controller";
import { AboutEntity } from "./entities/About";
import { AboutService } from "./service/about.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AboutEntity, PageEntity])
  ],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {

}