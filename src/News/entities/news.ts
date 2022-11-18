import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  image: string

  @Column({ default: new Date() })
  createdAt: Date
}