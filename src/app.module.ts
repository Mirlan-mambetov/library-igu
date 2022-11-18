import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { HeroModule } from './hero/hero.module';
import { PageModule } from './page/page.module';
import { TabsModule } from './tabs/tabs.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig
    }),
    HeroModule,
    PageModule,
    TabsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
