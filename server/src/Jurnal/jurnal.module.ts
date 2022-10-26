import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { JurnalController } from "./controller/jurnal.controller";
import { JurnalEntity } from "./entities/Jurnal";
import { JurnalAboutEntity } from "./entities/jurnal.about";
import { JurnalAddressEntity } from "./entities/jurnal.address";
import { JurnalService } from "./service/jurnal.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JurnalEntity, JurnalAboutEntity,
      JurnalAddressEntity, PageEntity
    ])
  ],
  controllers: [JurnalController],
  providers: [JurnalService]
})
export class JurnalModule {

}