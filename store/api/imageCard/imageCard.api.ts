import { IImageCard } from '../../../interfaces/imageCard.interface'
import { api } from '../api'

export const imageCardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllCards: builder.query<IImageCard[], null>({
			query: () => ({ url: 'imagecard' }),
			providesTags: ['Pages']
		}),
		updateCard: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `imagecard/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
