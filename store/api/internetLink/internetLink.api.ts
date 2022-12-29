import {
	IInternetLink,
	IInternetLinkCategory
} from '../../../interfaces/internetLink.interface'
import { api } from '../api'

export const internetLinkApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchMainLinkCategories: builder.query<IInternetLink[], null>({
			query: () => ({
				url: '/internet'
			}),
			providesTags: ['Internet']
		}),
		fetchCategoriesByMainCategory: builder.query<
			IInternetLinkCategory[],
			number
		>({
			query: (id) => ({
				url: `/internet/link/${id}`
			}),
			providesTags: ['Internet']
		}),
		createLinkMainCategory: builder.mutation<
			null,
			{ data: Pick<IInternetLink, 'name'> }
		>({
			query: ({ data }) => ({
				url: `/internet`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		}),
		updateLinkMainCategory: builder.mutation<
			null,
			{ data: Pick<IInternetLink, 'name'>; id: number }
		>({
			query: ({ id, data }) => ({
				url: `/internet/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		}),
		createLinkCategory: builder.mutation<
			null,
			{
				data: Pick<IInternetLinkCategory, 'name' | 'description' | 'link'>
				id: number
			}
		>({
			query: ({ id, data }) => ({
				url: `/internet/link/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		}),
		updateLinkCategory: builder.mutation<
			null,
			{
				data: Pick<IInternetLinkCategory, 'name' | 'description' | 'link'>
				id: number
			}
		>({
			query: ({ id, data }) => ({
				url: `/internet/link/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		}),
		deleteLinkMainCategory: builder.mutation<null, number>({
			query: (id) => ({
				url: `/internet/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		}),
		deleteLinkCategory: builder.mutation<null, number>({
			query: (id) => ({
				url: `/internet/link/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, err) => [{ type: 'Internet' }]
		})
	})
})
