import { IPartnersI } from '../../../interfaces/partners.interface'
import { api } from '../api'

export const partnersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllPartners: builder.query<IPartnersI[], null>({
			query: () => ({
				url: '/partners'
			}),
			providesTags: ['Pages']
		}),
		createPartnerLink: builder.mutation<null, FormData>({
			query: (data) => ({
				url: '/partners',
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		updatePartnerLink: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/partners/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
