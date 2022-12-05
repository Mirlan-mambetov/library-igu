import { TeachersDto } from '../../../components/Form/TeachersForm/UpdateTeachersCategory.dto'
import { IPaginationDtoI } from '../../../interfaces/pagination.meta.interface'
import {
	ITeachers,
	ITeachersWork,
	ITeachersWorkByCategory
} from '../../../interfaces/teachers.interface'
import { api } from '../api'
import { IPaginationDto } from '../pagination.dto'

export const teachersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllCategory: builder.query<ITeachers[], null>({
			query: () => ({ url: '/teachers' }),
			providesTags: ['Teachers']
		}),
		fetchOneCategory: builder.query<ITeachers, number>({
			query: (id) => ({ url: `/teachers/${id}` }),
			providesTags: ['Teachers']
		}),
		fetchWorksByCategory: builder.query<
			ITeachersWorkByCategory,
			{ id: number; query?: IPaginationDtoI }
		>({
			query: ({ id, query }) => ({
				url: `/teachers/works/category/${id}?page=${query?.page}`
			}),
			providesTags: ['Teachers']
		}),
		createTeachersCategory: builder.mutation<null, TeachersDto>({
			query: (body) => ({
				url: '/teachers',
				method: 'Post',
				body
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		}),
		updateTeachersCategory: builder.mutation<
			null,
			{ id: number; data: TeachersDto }
		>({
			query: ({ id, data }) => ({
				url: `/teachers/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		}),
		deleteTeachersCategory: builder.mutation<null, number>({
			query: (id) => ({
				url: `/teachers/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		}),
		createTeachersWork: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/teachers/works/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		}),
		updateTeachersWork: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/teachers/works/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		}),
		deleteTeachersWork: builder.mutation<null, number>({
			query: (id) => ({
				url: `/teachers/works/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error, id) => [{ type: 'Teachers' }]
		})
	})
})
