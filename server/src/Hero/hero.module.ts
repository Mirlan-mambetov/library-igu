import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { HeroController } from "./controllers/hero.controller";
import { HeroE } from "./entities/hero";
import { HerosubcontentE } from "./entities/hero.subcontent";
import { HeroSerivce } from "./services/hero.services";

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroE, HerosubcontentE, PageEntity])
  ],
  controllers: [HeroController],
  providers: [HeroSerivce],
})
export class HeroModule { }