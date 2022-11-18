import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'owner' })
export class OwnerEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  image: string

  @Column()
  phone: string

  @Column()
  email: string
}