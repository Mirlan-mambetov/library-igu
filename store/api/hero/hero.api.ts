import {
	IHeroDto,
	IHeroImageDto
} from '../../../components/Form/HeroForm/Hero.dto'
import { IHero } from '../../../interfaces/hero.interface'
import { api } from '../api'

export const heroApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateHero: builder.mutation<IHero, IHeroDto>({
			query: ({ id, ...body }) => ({
				url: `/hero/${id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Hero', id },
				{ type: 'Pages' }
			]
		}),
		updateHeroImage: builder.mutation<null, IHeroImageDto>({
			async queryFn({ id, background }, api, extraOptions, baseQuery) {
				const formData = new FormData()
				formData.append('background', background)
				const response = await baseQuery({
					url: `/hero/image/${id}`,
					body: formData
				})
				return {
					error: {
						status: 500,
						statusText: 'Internal Server Error',
						data: response.data
					}
				}
			},
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Hero', id },
				{ type: 'Pages' }
			]
		})
	})
})
// query: ({ id, ...data }) => ({
// 	url: `/hero/image/${id}`,
// 	method: 'PUT',
// 	body: data
// })
