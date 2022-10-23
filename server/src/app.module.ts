import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { HeroE } from './Hero/entities/hero';
import { HerosubcontentE } from './Hero/entities/hero.subcontent';
import { HeroModule } from './Hero/hero.module';
import { NewsE } from './News/entities/news';
import { NewsModule } from './News/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './config/.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [
        HeroE,
        HerosubcontentE,
        NewsE
      ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    HeroModule,
    NewsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
