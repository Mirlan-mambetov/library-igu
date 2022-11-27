import { IJournalDto } from '../../../components/Form/UpdateJournalForm/UpdateJournal.dto'
import { IUpdateJournalDto } from '../../../components/Form/UpdateJournalForm/UpdateJournal.field.dto'
import { api } from '../api'

export const journalApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateJournal: builder.mutation<
			null,
			Pick<IJournalDto, 'title' | 'subtitle' | 'description' | 'id'>
		>({
			query: ({ id, ...body }) => ({
				url: `/journal/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		})
	})
})
