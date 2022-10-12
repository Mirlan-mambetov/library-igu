import { BooksI } from "../../interfaces/Books.interface";

export interface FileFieldProps {
  books: BooksI[]
  position?: 'column' | 'row'
}