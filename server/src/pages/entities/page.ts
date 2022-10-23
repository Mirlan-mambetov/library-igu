import { HerosubcontentE } from "src/Hero/entities/hero.subcontent";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pages' })
export class PageE {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  // @OneToOne(() => HerosubcontentE, (heroS) => heroS.page)
  // herosubcontent: HerosubcontentE
}