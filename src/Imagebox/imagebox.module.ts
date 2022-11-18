import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageboxController } from './controller/imagebox.controller';
import { ImageboxEntity } from './entities/Imagebox';
import { ImageboxService } from './service/imagebox.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImageboxEntity])
  ],
  controllers: [ImageboxController],
  providers: [ImageboxService]
})
export class ImageboxModule {

}