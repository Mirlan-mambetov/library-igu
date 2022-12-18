import { IPartners } from '../../../interfaces/Partners.interface'
import { api } from '../api'

export const partnersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchPartners: builder.query<IPartners[], null>({
			query: () => ({
				url: '/partners'
			}),
			providesTags: ['Pages']
		})
	})
})
