import {
	IAboutInfo,
	IAboutOwner,
	IAboutTablo
} from '../../../interfaces/about.inteface'
import { api } from '../api'

export const aboutApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAboutTablo: builder.query<IAboutTablo[], null>({
			query: () => ({
				url: '/about/tablo'
			}),
			providesTags: ['Pages']
		}),
		fetchAboutOwner: builder.query<IAboutOwner[], null>({
			query: () => ({
				url: '/about/owner'
			}),
			providesTags: ['Pages']
		}),
		fetchAboutInfo: builder.query<IAboutInfo[], null>({
			query: () => ({
				url: '/about/info'
			}),
			providesTags: ['Pages']
		}),
		fetchAboutInfoById: builder.query<IAboutInfo, { id: number }>({
			query: ({ id }) => ({
				url: `/about/info/${id}`
			}),
			providesTags: ['Pages']
		}),
		updateAboutInfo: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/about/info/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
