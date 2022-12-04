import { TeachersDto } from '../../../components/Form/TeachersForm/UpdateTeachersCategory.dto'
import { ITeachers } from '../../../interfaces/teachers.interface'
import { api } from '../api'

export const teachersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllCategory: builder.query<ITeachers[], null>({
			query: () => ({ url: '/teachers' }),
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
		})
	})
})
