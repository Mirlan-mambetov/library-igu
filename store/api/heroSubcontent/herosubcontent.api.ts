// import { ISubcontentDto } from '../../../components/Form/HeroForm/UpdateHeroSubcontent/Subcontent.dto'
// import { api } from '../api'

// export const heroSubcontentApi = api.injectEndpoints({
// 	endpoints: (builder) => ({
// 		updateSubContent: builder.mutation<null, ISubcontentDto>({
// 			query: ({ id, ...body }) => ({
// 				url: `/hero/subcontent/${id}`,
// 				method: 'Put',
// 				body
// 			}),
// 			providesTags: (result) =>
// 			result [
// 					...result.map(({ id }) => ({ type: 'Contract', id})),
// 					{ type: 'Contract', id: 'LIST'},
// 					] : [{ type: 'Contract', id: 'LIST'}]
// 		})
// 	})
// })
