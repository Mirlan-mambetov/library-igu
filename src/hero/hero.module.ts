import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from './entity/Hero.entity';
import { HeroSubcontentEntity } from './entity/hero.subcontent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroEntity, HeroSubcontentEntity])
  ],
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule { }
