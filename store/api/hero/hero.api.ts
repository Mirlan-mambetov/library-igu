import { IHeroDto } from '../../../components/Form/HeroForm/Hero.dto'
import { IHero } from '../../../interfaces/hero.interface'
import { api } from '../api'

export const heroApi = api.injectEndpoints({
	endpoints: build => ({
		updateHero: build.mutation<IHero, IHeroDto>({
			query: ({ id, ...body }) => ({
				url: `/hero/${id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Hero', id }, {type: "Pages"}]
		})
	})
})
