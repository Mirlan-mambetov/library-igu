import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'imagebox' })
export class ImageboxEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  subtitle: string

  @Column()
  description: string

  @Column()
  image: string
}