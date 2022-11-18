import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'arrivals_image' })
export class ArrivalsImageE {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column({ default: new Date() })
  createdAt: Date

  @ManyToOne(() => PageEntity, (page) => page.arrivalImage)
  @JoinColumn()
  page: PageEntity
}