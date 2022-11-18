import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { ElibraryController } from "./controller/elibrary.controller";
import { ElibraryEntity } from "./entities/Elibrary";
import { ElibraryBooksEntity } from "./entities/Elibrary.books";
import { ElibraryCategoriesEntity } from "./entities/elibrary.categories";
import { ElibraryService } from "./service/elibrary.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ElibraryEntity, ElibraryCategoriesEntity,
      ElibraryBooksEntity, PageEntity
    ])
  ],
  controllers: [ElibraryController],
  providers: [ElibraryService]
})
export class ElibraryModule {

}