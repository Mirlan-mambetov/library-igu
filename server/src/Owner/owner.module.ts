import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { OwnerController } from "./controller/owner.controller";
import { OwnerEntity } from "./entities/Owner";
import { OwnerService } from "./service/owner.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([OwnerEntity, PageEntity])
  ],
  controllers: [OwnerController],
  providers: [OwnerService]
})
export class OwnerModule {

}