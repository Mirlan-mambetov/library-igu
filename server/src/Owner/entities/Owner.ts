import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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