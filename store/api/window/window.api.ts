import { IWindow } from '../../../interfaces/window.interface'
import { api } from '../api'

export const windowApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchWindowMainCategories: builder.query<IWindow[], null>({
			query: () => ({
				url: '/window'
			}),
			providesTags: ['Window']
		})
	})
})
