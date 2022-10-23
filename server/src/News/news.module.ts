import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewsController } from "./controllers/news.controller";
import { NewsE } from "./entities/news";
import { NewsService } from "./services/news.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsE])
  ],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {

}