import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArrivalsLinkE } from "./arrivals.link";

@Entity({ name: 'arrivals' })
export class ArrivalsE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @OneToMany(() => ArrivalsLinkE, (l) => l.arrivals)
  link: ArrivalsLinkE[]
}