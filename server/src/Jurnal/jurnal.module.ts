import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JurnalController } from "./controller/jurnal.controller";
import { JurnalService } from "./service/jurnal.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
    ])
  ],
  controllers: [JurnalController],
  providers: [JurnalService]
})
export class JurnalModule {

}