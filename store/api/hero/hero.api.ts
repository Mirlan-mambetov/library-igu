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
			query: ({ id, background }) => ({
				url: `/hero/image/${id}`,
				method: 'PUT',
				body: background
			}),
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
