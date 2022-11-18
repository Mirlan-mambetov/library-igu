import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'about' })
export class AboutEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  title: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  image: string

  @ManyToOne(() => PageEntity, (page) => page.about)
  page: PageEntity
}