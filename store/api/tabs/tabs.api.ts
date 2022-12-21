import { IUpdateTabDto } from '../../../components/Form/TabForm/UpdateTab/UpdateTab.dto'
import { IUpdateTabLinkDtoApi } from '../../../components/Form/TabForm/UpdateTabLink/UpdateTabLink.dto'
import { api } from '../api'

export const tabsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateTab: builder.mutation<null, IUpdateTabDto>({
			query: ({ id, ...body }) => ({
				url: `/tabs/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		}),
		updateTabLink: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/tabs/tablink/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		}),
		createTabLink: builder.mutation<null, { id: number; data: FormData }>({
			query: ({ id, data }) => ({
				url: `/tabs/tablink/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		}),
		deleteTabLink: builder.mutation<null, number>({
			query: (id) => ({
				url: `/tabs/tablink/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (res, error) => [{ type: 'Pages' }]
		})
	})
})
