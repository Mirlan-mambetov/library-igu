import { ICreateHeroSubcontentDto } from '../../../components/Form/HeroForm/CreateSubContent/CreateSubContent.dto'
import {
	IHeroDto,
	IHeroImageDto
} from '../../../components/Form/HeroForm/Hero.dto'
import { ISubcontentDto } from '../../../components/Form/HeroForm/UpdateHeroSubcontent/Subcontent.dto'
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
		updateSubContent: builder.mutation<null, ISubcontentDto>({
			query: ({ id, ...body }) => ({
				url: `/hero/subcontent/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (result, error, { id }) => [{ type: 'Pages' }]
		}),
		createSubContent: builder.mutation<null, ICreateHeroSubcontentDto>({
			query: ({ heroId, ...body }) => ({
				url: `/hero/subcontent/${heroId}`,
				method: 'Post',
				body
			}),
			invalidatesTags: (result, error, { heroId }) => [{ type: 'Pages' }]
		})
	})
})
