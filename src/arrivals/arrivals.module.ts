import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageEntity } from 'src/pages/entities/Page';
import { ArrivalsController } from './controllers/arrivals.controller';
import { ArrivalsE } from './entities/arrivals';
import { ArrivalsImageE } from './entities/arrivals.image';
import { ArrivalsLinkE } from './entities/arrivals.link';
import { ArrivalsServices } from './services/arrivals.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArrivalsE, ArrivalsImageE, ArrivalsLinkE, PageEntity])
  ],
  controllers: [ArrivalsController],
  providers: [ArrivalsServices]
})
export class ArrivalsModule {

}