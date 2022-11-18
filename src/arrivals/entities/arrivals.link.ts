import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArrivalsE } from "./arrivals";

@Entity({ name: 'arrivals_link' })
export class ArrivalsLinkE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  link: string

  @ManyToOne(() => ArrivalsE, (a) => a.link)
  arrivals: ArrivalsE
}