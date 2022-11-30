import { IArchivDto } from '../../../components/Form/ArchivForm/Archiv.dto'
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
		})
	})
})
