import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArrivalsLinkE } from "./arrivals.link";

@Entity({ name: 'arrivals' })
export class ArrivalsE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @OneToMany(() => ArrivalsLinkE, (l) => l.arrivals)
  link: ArrivalsLinkE[]

  @ManyToOne(() => PageEntity, (page) => page.arrivals)
  @JoinColumn()
  page: PageEntity
}