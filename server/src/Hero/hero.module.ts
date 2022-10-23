import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageE } from "src/pages/entities/page";
import { HeroController } from "./controllers/hero.controller";
import { HeroE } from "./entities/hero";
import { HerosubcontentE } from "./entities/hero.subcontent";
import { HeroSerivce } from "./services/hero.services";

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroE, PageE, HerosubcontentE])
  ],
  controllers: [HeroController],
  providers: [HeroSerivce]
})
export class HeroModule {

}