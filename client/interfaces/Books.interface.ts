export interface BooksI {
  id: string | number
  text: string
  auhtors: string[]
  link: string
  publishedYear?: string
  downloaded: number
  views: number
  createdAt: string
}
export interface BooksCategory {
  id: string | number
  name: string
  image?: string
  totalBooks: number
}