import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnersController } from './controllers/partners.controller';
import { PartnersE } from './entities/partner';
import { PartnersService } from './services/partners.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PartnersE])
  ],
  controllers: [PartnersController],
  providers: [PartnersService]
})
export class PartnersModule { }
