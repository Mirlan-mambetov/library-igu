import {
	IITemsPaginate,
	IPaginationDtoI
} from '../../../interfaces/paginate.interface'
import {
	ITeachersCategory,
	ITeachersWorks
} from '../../../interfaces/teachers.interface'
import { api } from '../api'

export const teachersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllTeacherCategory: builder.query<ITeachersCategory[], null>({
			query: () => ({
				url: '/teachers'
			})
		}),
		fetchTeacherCategory: builder.query<ITeachersCategory, number>({
			query: (id) => ({
				url: `/teachers/${id}`
			})
		}),
		fetchTeachersWorksLimit: builder.query<ITeachersWorks[], { limit: number }>(
			{
				query: ({ limit }) => ({
					url: `/teachers/works/limit?limit=${limit}`
				})
			}
		),
		fetchWorksByCategory: builder.query<
			IITemsPaginate<ITeachersWorks>,
			{ id: number; query?: IPaginationDtoI }
		>({
			query: ({ id, query }) => ({
				url: `/teachers/works/category/${id}?page=${query?.page}&limit=${query?.limit}`
			}),
			providesTags: ['WorksByCategory']
		}),
		updateViews: builder.mutation<null, number>({
			query: (id) => ({
				url: `/teachers/works-views/${id}`,
				method: 'Post'
			}),
			invalidatesTags: (res, error) => [{ type: 'WorksByCategory' }]
		})
	})
})
