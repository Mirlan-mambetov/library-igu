import { IArrivalImage } from '../../../interfaces/arrival.interface'
import { api } from '../api'

export const arrivalApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchArrivalImage: builder.query<IArrivalImage[], null>({
			query: () => ({
				url: '/arrival/images'
			}),
			providesTags: ['Pages']
		})
	})
})
