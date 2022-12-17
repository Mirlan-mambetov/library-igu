import { IImagebox } from '../../../interfaces/imagebox.interface'
import { api } from '../api'

export const imageCardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllImageCards: builder.query<IImagebox[], null>({
			query: () => ({
				url: '/imagecard'
			})
		})
	})
})
