import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ElibraryEntity } from "./Elibrary";
import { ElibraryBooksEntity } from "./Elibrary.books";

@Entity({ name: 'elibrary_categories' })
export class ElibraryCategoriesEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @OneToMany(() => ElibraryBooksEntity, (books) => books.category)
  books: ElibraryBooksEntity[]

  @ManyToOne(() => ElibraryEntity, (category) => category.categories)
  categories: ElibraryEntity
}