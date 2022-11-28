import { ICreateHeroSubcontentDto } from '../../../components/Form/HeroForm/CreateSubContent/CreateSubContent.dto'
import { IHeroDto } from '../../../components/Form/HeroForm/Hero.dto'
import { ISubcontentDto } from '../../../components/Form/HeroForm/UpdateHeroSubcontent/Subcontent.dto'
import { IHero } from '../../../interfaces/hero.interface'
import { api } from '../api'

interface testI {
	id: number
	title: any
	background: any
}
export const heroApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateHero: builder.mutation<IHero, { data: FormData; id: number }>({
			query: ({ data, id }) => ({
				url: `/hero/${id}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
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
