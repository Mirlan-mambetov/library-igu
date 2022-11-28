import { IPageDto } from '../../../components/Form/PageForm/Page.dto'
import { IPage } from '../../../interfaces/page.interface'
import { api } from '../api'

export const pageApi = api.injectEndpoints({
	endpoints: (build) => ({
		fetchAllPages: build.query<IPage[], null>({
			query: () => ({ url: '/page' }),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Pages' as const, id })),
							{ type: 'Pages', id: 'LIST' }
					  ]
					: [{ type: 'Pages', id: 'LIST' }]
		}),
		fetchOnePage: build.query<IPage, number>({
			query: (id) => ({ url: `/page/${id}` }),
			providesTags: (result, error, id) => [{ type: 'Pages', id }]
		}),
		createPage: build.mutation<IPage, IPageDto>({
			query: ({ name }) => ({
				url: '/page',
				body: name
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Pages' }]
		})
	})
})
