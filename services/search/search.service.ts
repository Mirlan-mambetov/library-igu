import { ISearchResult, SearchType } from '../../interfaces/search.interface'
import { axiosBase } from '../api.config'

export const searchService = {
  async mainSearch(searchTerm: string) {
    return await axiosBase.get<SearchType>(`/search?find=${searchTerm}`)
  }
}
