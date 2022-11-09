import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutEntity } from "src/about/entities/About";
import { AboutInfoEntity } from "src/about/entities/aboutInformation";
import { ElibraryEntity } from "src/elibrary/entities/Elibrary";
import { ElibraryBooksEntity } from "src/elibrary/entities/Elibrary.books";
import { ElibraryCategoriesEntity } from "src/elibrary/entities/elibrary.categories";
import { HeroE } from "src/Hero/entities/hero";
import { IslinkEntity } from "src/Tabs/entities/Islink";
import { TabsEntity } from "src/Tabs/entities/Tabs";
import { PagesController } from "./controller/pages.controller";
import { PageEntity } from "./entities/Page";
import { PagesService } from "./service/pages.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PageEntity, HeroE,
      TabsEntity, IslinkEntity,
      AboutEntity, AboutInfoEntity,
      ElibraryEntity, ElibraryCategoriesEntity,
      ElibraryBooksEntity
    ])
  ],
  controllers: [PagesController],
  providers: [PagesService]
})
export class PagesModule {

}