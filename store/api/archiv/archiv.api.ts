import {
	IArchivDto,
	IArchivMaterialDto
} from '../../../components/Form/ArchivForm/Archiv.dto'
import { IArhivs } from '../../../interfaces/arhivs.interface'
import { api } from '../api'

export const archivApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createArchiv: builder.mutation<null, { pageId: number; data: IArchivDto }>({
			query: ({ pageId, data }) => ({
				url: `/vestnik/${pageId}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
		}),
		updateArchiv: builder.mutation<null, { id: number; data: IArchivDto }>({
			query: ({ id, data }) => ({
				url: `/vestnik/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
		}),
		getArchivById: builder.query<IArhivs, number>({
			query: (id) => ({ url: `/vestnik/${id}` }),
			providesTags: ['Pages']
		}),
		createArchivMaterial: builder.mutation<
			null,
			{ id: number; data: FormData }
		>({
			query: ({ id, data }) => ({
				url: `/vestnik/material/${id}`,
				method: 'Post',
				body: data
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
		}),
		updateArchivMaterial: builder.mutation<
			null,
			{ id: number; data: FormData }
		>({
			query: ({ id, data }) => ({
				url: `/vestnik/material/${id}`,
				method: 'Put',
				body: data
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
		}),
		deleteArchivMaterial: builder.mutation<void, number>({
			query: (id) => ({
				url: `/vestnik/material/${id}`,
				method: 'Delete'
			}),
			invalidatesTags: (result, error) => [{ type: 'Pages' }]
		})
	})
})
