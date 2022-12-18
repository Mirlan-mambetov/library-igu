import { INews } from '../../../interfaces/News.interface'
import {
	IITemsPaginate,
	IPaginationDtoI
} from '../../../interfaces/Paginate.interface'
import { api } from '../api'

export const newsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllNewsWithPaginate: builder.query<
			IITemsPaginate<INews>,
			{ query?: IPaginationDtoI }
		>({
			query: ({ query }) => ({
				url: `/news?page=${query?.page}&limit=${query?.limit}`
			}),
			providesTags: ['Pages']
		})
	})
})
