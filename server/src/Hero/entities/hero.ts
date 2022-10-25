import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HerosubcontentE } from "./hero.subcontent";

@Entity({ name: 'hero' })
export class HeroE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    default: '',
    nullable: true
  })
  background: string

  @Column({ nullable: true })
  subtitle: string

  @OneToMany(() => HerosubcontentE, (s) => s.hero)
  @JoinColumn()
  subcontent: HerosubcontentE[]

  @ManyToOne(() => PageEntity, (page) => page.hero)
  @JoinColumn()
  page: PageEntity
}