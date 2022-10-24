import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'arrivals_image' })
export class ArrivalsImageE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column({ default: new Date() })
  createdAt: Date
}