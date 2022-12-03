import { INews } from '../../../interfaces/news.interface'
import { api } from '../api'

export const newsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllNews: builder.query<INews[], null>({
			query: () => ({
				url: '/news'
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
		})
	})
})
