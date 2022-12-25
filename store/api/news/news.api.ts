import { INews } from '../../../interfaces/news.interface'
import {
	IPaginationDtoI,
	IPaginationI
} from '../../../interfaces/pagination.meta.interface'
import { api } from '../api'

export interface INewsPaginationI {
	items: INews[]
	meta?: IPaginationI
}

export const newsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllNews: builder.query<INewsPaginationI, { query?: IPaginationDtoI }>({
			query: ({ query }) => ({
				url: `/news?page=${query?.page}&limit=${query?.limit}`
			}),
			providesTags: ['Pages']
		}),
		createNews: builder.mutation<null, FormData>({
			query: (body) => ({
				url: '/news',
				method: 'Post',
				body
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		updateNews: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/news/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		deleteNews: builder.mutation<null, number>({
			query: (id) => ({
				url: `/news/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
