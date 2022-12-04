import { IArrivalImageDto } from '../../../components/Form/ArrivalForm/updateArrivalImage.dto'
import { IArrival } from '../../../interfaces/arrival.interface'
import { api } from '../api'

export const arrivalApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllArrivalImages: builder.query<IArrival[], null>({
			query: () => ({ url: '/arrival/images' }),
			providesTags: ['Arrival']
		}),
		updateArrivalImage: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/arrival/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Arrival' }]
		})
	})
})
