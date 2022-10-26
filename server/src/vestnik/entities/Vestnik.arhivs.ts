import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { VestnikEntity } from "./Vestnik";

@Entity({ name: 'vestnik_arhivs' })
export class VestnikArhivsEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  authors: string

  @Column({ nullable: true })
  downloaded: number

  @Column({ nullable: true })
  views: number

  @Column()
  file: string

  @Column({ default: new Date() })
  published: Date

  @ManyToOne(() => VestnikEntity, (vestnik) => vestnik.arhivs)
  category: VestnikEntity
}