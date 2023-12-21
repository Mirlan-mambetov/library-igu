import { searchResultEnum } from './enum/SearchEnum'

export type SearchType = ISearchResultData[]

export interface ISearchResultData {
  data: ISearchResult[]
  source: searchResultEnum
}
export interface ISearchResult {
  id: number
  name?: string
  title?: string
  authors?: string
  description?: string
  category: Category
  file: string
}

export interface Category {
  id: number
  createdAt: string
  updatedAt: string
  name: string
}
