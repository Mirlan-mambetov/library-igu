import { IArhivs, IArhivsMaterials } from '../../../interfaces/Archiv.interface'
import {
	IITemsPaginate,
	IPaginationDtoI
} from '../../../interfaces/Paginate.interface'
import { api } from '../api'

export const vestnikApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchArchivById: builder.query<IArhivs, number>({
			query: (id) => ({
				url: `/vestnik/${id}`
			})
		}),
		fetchAllArchivs: builder.query<IArhivs[], null>({
			query: () => ({
				url: `/vestnik`
			})
		}),
		fetchMaterialsByArchiv: builder.query<
			IITemsPaginate<IArhivsMaterials>,
			{ id: number; query?: IPaginationDtoI }
		>({
			query: ({ id, query }) => ({
				url: `/vestnik/materials/category/${id}?page=${query?.page}&limit=${query?.limit}`
			}),
			providesTags: ['Pages']
		}),
		updateMaterialViews: builder.mutation<null, number>({
			query: (id) => ({
				url: `/vestnik/material-views/${id}`,
				method: 'Post'
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
