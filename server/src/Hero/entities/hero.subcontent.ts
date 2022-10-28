import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { HeroE } from "./hero";

@Entity({ name: 'hero_subcontent' })
export class HerosubcontentE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => HeroE, (hero) => hero.subcontent)
  @JoinColumn()
  hero: HeroE
}