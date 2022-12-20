import { ElibraryCategoryDto } from '../../../components/Form/ElibraryForm/ElibraryForm.dto'
import {
	IElibrary,
	IElibraryBooks,
	IElibraryBooksByCategory,
	IElibraryCategory
} from '../../../interfaces/elibrary.interface'
import { api } from '../api'
import { IPaginationDto } from '../pagination.dto'

export const elibraryApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchCategories: builder.query<IElibrary[], null>({
			query: () => ({
				url: 'elibrary'
			}),
			providesTags: ['Pages']
		}),
		fetchMainCategoryById: builder.query<
			Pick<IElibrary, 'id' | 'name'>,
			number
		>({
			query: (id) => ({
				url: `/elibrary/${id}`
			}),
			providesTags: ['Pages']
		}),
		fetchCategoryByMainCategory: builder.query<IElibraryCategory[], number>({
			query: (id) => ({
				url: `/elibrary/category/${id}`
			}),
			providesTags: ['Pages']
		}),
		fetchCategoryById: builder.query<
			Pick<IElibraryCategory, 'name' | 'id'>,
			number
		>({
			query: (id) => ({
				url: `/elibrary/category/category/${id}`
			}),
			providesTags: ['Pages']
		}),
		fetchBooksByCategory: builder.query<
			IElibraryBooksByCategory,
			{ id: number; query?: IPaginationDto }
		>({
			query: ({ id, query }) => ({
				url: `/elibrary/books/category/${id}?page=${query?.page}&limit=${query?.limit}`
			}),
			providesTags: ['Pages']
		}),
		updateElibrary: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/elibrary/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		createElibrary: builder.mutation<null, FormData>({
			query: (body) => ({
				url: '/elibrary',
				method: 'Post',
				body
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		createElibraryCategory: builder.mutation<
			null,
			{ id: number; data: ElibraryCategoryDto }
		>({
			query: ({ id, data }) => ({
				url: `/elibrary/category/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		updateElibraryCategory: builder.mutation<
			null,
			{ id: number; data: ElibraryCategoryDto }
		>({
			query: ({ id, data }) => ({
				url: `/elibrary/category/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		createElibraryBook: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/elibrary/book/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		updateElibraryBook: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/elibrary/book/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		deleteElibraryBook: builder.mutation<null, number>({
			query: (id) => ({
				url: `/elibrary/books/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		deleteSecondCategory: builder.mutation<null, number>({
			query: (id) => ({
				url: `/elibrary/category/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
