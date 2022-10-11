export interface BooksI {
  id: string | number
  title: string
  auhtors: string[]
  link: string
  publishedYear: string
  downloaded: number
  views: number
}
export interface BooksCategory {
  id: string | number
  name: string
  image?: string
  totalBooks: number
}