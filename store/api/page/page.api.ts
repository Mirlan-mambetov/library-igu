import { IPage } from '../../../interfaces/page.interface'
import { api } from '../api'

export const pageApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchPage: builder.query<IPage, number>({
			query: (id) => ({
				url: `/page/${id}`
			}),
			providesTags: (result, error, id) => [{ type: 'Pages', id }]
		})
	})
})
