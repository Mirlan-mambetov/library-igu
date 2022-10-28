import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AboutModule } from './about/about.module';
import { ArrivalsModule } from './arrivals/arrivals.module';
import { ElibraryModule } from './elibrary/elibrary.module';
import { HeroModule } from './Hero/hero.module';
import { ImageboxModule } from './Imagebox/imagebox.module';
import { JurnalModule } from './Jurnal/jurnal.module';
import { NewsModule } from './News/news.module';
import { OwnerModule } from './Owner/owner.module';
import { PagesModule } from './pages/pages.module';
import { PartnersModule } from './partners/partners.module';
import { TabsModule } from './Tabs/tabs.module';
import { VestnikModule } from './vestnik/vestnik.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
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
    OwnerModule,
    VestnikModule,
    ElibraryModule,
    PagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
