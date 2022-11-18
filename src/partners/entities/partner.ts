import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'partners' })
export class PartnersE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  link: string
}