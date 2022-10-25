import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { TabsController } from "./controller/tabs.controller";
import { IslinkEntity } from "./entities/Islink";
import { TabsEntity } from "./entities/Tabs";
import { TabsService } from "./service/tabs.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([TabsEntity, PageEntity, IslinkEntity])
  ],
  controllers: [TabsController],
  providers: [TabsService]
})
export class TabsModule { }