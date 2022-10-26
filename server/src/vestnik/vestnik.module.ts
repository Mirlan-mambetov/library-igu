import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageEntity } from "src/pages/entities/Page";
import { VestnikController } from "./controllers/vestnik.controller";
import { VestnikEntity } from "./entities/Vestnik";
import { VestnikArhivsEntity } from "./entities/Vestnik.arhivs";
import { VestnikService } from "./services/vestnik.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([VestnikEntity, VestnikArhivsEntity, PageEntity])
  ],
  controllers: [VestnikController],
  providers: [VestnikService]
})
export class VestnikModule {

}