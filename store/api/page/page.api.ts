import { IPage } from '../../../interfaces/Page.interface'
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
