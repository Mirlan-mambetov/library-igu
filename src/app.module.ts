import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainPageModule } from './app-pages/main-page/mainPage.module';
import { getTypeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig
    }),
    MainPageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
