import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ElibraryCategoriesEntity } from "./elibrary.categories";

@Entity({ name: 'elibrary_books' })
export class ElibraryBooksEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  authors: string

  @Column()
  description: string

  @Column()
  published: number

  @Column({ default: 0 })
  downloaded: number

  @Column({ default: 0 })
  views: number

  @Column()
  file: string

  @ManyToOne(() => ElibraryCategoriesEntity, (category) => category.books)
  category: ElibraryCategoriesEntity
}