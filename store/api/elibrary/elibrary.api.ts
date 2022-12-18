import {
	IElibraryCategory,
	IElibrarySecondCategory
} from '../../../interfaces/elibrary.interface'
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
		})
	})
})
