import { IElibrary } from '../../../interfaces/elibrary.interface'
import { api } from '../api'

export const elibraryApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchCategories: builder.query<IElibrary[], null>({
			query: () => ({
				url: 'elibrary'
			}),
			providesTags: ['Pages']
		}),
		updateElibrary: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/elibrary/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
