import { IWindow, IWindowCategory } from '../../../interfaces/window.interface'
import { api } from '../api'

export const windowApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllWindowMainCategories: builder.query<IWindow[], null>({
			query: () => ({
				url: '/window'
			}),
			providesTags: ['Window']
		}),
		createWindowMainCategory: builder.mutation<null, IWindow>({
			query: (data) => ({
				url: '/window',
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Window' }]
		}),
		updateWindowMainCategory: builder.mutation<
			null,
			{ id: number; data: IWindow }
		>({
			query: ({ id, data }) => ({
				url: `/window/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Window' }]
		}),
		fetchWindowCategoryByMainCategory: builder.query<IWindowCategory[], number>(
			{
				query: (id) => ({
					url: `/window/category/category/${id}`
				}),
				providesTags: ['Window']
			}
		),
		createWindowCategory: builder.mutation<
			null,
			{ id: number; data: FormData }
		>({
			query: ({ id, data }) => ({
				url: `/window/category/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Window' }]
		}),
		updateWindowCategory: builder.mutation<
			null,
			{ id: number; data: FormData }
		>({
			query: ({ id, data }) => ({
				url: `/window/category/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, err) => [{ type: 'Window' }]
		})
	})
})
