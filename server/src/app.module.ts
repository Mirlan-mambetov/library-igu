import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AboutModule } from './about/about.module';
import { ArrivalsModule } from './arrivals/arrivals.module';
import { HeroE } from './Hero/entities/hero';
import { HerosubcontentE } from './Hero/entities/hero.subcontent';
import { HeroModule } from './Hero/hero.module';
import { ImageboxModule } from './Imagebox/imagebox.module';
import { JurnalModule } from './Jurnal/jurnal.module';
import { NewsE } from './News/entities/news';
import { NewsModule } from './News/news.module';
import { PagesModule } from './pages/pages.module';
import { PartnersModule } from './partners/partners.module';
import { TabsModule } from './Tabs/tabs.module';

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
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    HeroModule,
    NewsModule,
    ArrivalsModule,
    PartnersModule,
    ImageboxModule,
    TabsModule,
    JurnalModule,
    AboutModule,
    PagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
