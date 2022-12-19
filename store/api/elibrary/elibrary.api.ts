import {
	IElibraryBooks,
	IElibraryCategory,
	IElibrarySecondCategory
} from '../../../interfaces/elibrary.interface'
import {
	IITemsPaginate,
	IPaginationDtoI
} from '../../../interfaces/paginate.interface'
import { api } from '../api'

export const elibraryApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchMainCategories: builder.query<IElibraryCategory[], null>({
			query: () => ({
				url: '/elibrary'
			})
		}),
		fetchMainCategoryById: builder.query<IElibraryCategory, number>({
			query: (id) => ({
				url: `/elibrary/${id}`
			})
		}),
		fetchCategoryByMainCategory: builder.query<
			IElibrarySecondCategory[],
			number
		>({
			query: (id) => ({
				url: `/elibrary/category/${id}`
			})
		}),
		fetchBooksByCategory: builder.query<
			IITemsPaginate<IElibraryBooks>,
			{ id: number; query: IPaginationDtoI }
		>({
			query: ({ id, query }) => ({
				url: `/elibrary/books/category/${id}?page=${query.page}&limit=${query.limit}`
			}),
			providesTags: ['Books']
		}),
		updateBookView: builder.mutation<null, number>({
			query: (id) => ({
				url: `/elibrary/book-views/${id}`,
				method: 'Put'
			}),
			invalidatesTags: (res, err) => [{ type: 'Books' }]
		})
	})
})
