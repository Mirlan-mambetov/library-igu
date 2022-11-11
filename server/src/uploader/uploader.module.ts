import { Module } from "@nestjs/common";
import { UploaderService } from "./services/uploader.sevice";

@Module({
  imports: [],
  controllers: [],
  providers: [UploaderService]
})
export class UloaderModule { }