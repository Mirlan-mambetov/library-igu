export interface CategoryI {
  id: string | number
  title: string
  subTitle: string
  alias: string
}
export interface BooksCategoryI {
  id: string | number
  name: string
  alias: string
}
export interface ElibraryCategoryI {
  id: string | number
  title: string
  alias: string
  totalBooks: number
  image: string
}