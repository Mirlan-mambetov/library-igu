import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ElibraryCategoriesEntity } from "./elibrary.categories";

@Entity({ name: 'elibrary' })
export class ElibraryEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column()
  image: string

  @OneToMany(() => ElibraryCategoriesEntity, (categories) => categories.categories)
  categories: ElibraryCategoriesEntity[]

  @ManyToOne(() => PageEntity, (page) => page.elibrary)
  page: PageEntity
}