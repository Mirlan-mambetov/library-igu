import { IJournalDto } from '../../../components/Form/JournalForm/UpdateJournalForm/UpdateJournal.dto'
import { IUpdateJournalDto } from '../../../components/Form/JournalForm/UpdateJournalForm/UpdateJournal.field.dto'
import { IUpdateJournalHeadDto } from '../../../components/Form/JournalForm/UpdateJournalHead/UpdateJournalHead.dto'
import { IUpdateJournalHeadItemsDto } from '../../../components/Form/JournalForm/UpdateJournalHeadItems/UpdateJournalHeadItems.dto'
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
		}),
		updateJournalHead: builder.mutation<null, IUpdateJournalHeadDto>({
			query: ({ id, ...body }) => ({
				url: `/journal/journalhead/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		}),
		updateJournalHeadItems: builder.mutation<null, IUpdateJournalHeadItemsDto>({
			query: ({ id, ...body }) => ({
				url: `/journal/journalheaditems/${id}`,
				method: 'Put',
				body
			}),
			invalidatesTags: (res, error, { id }) => [{ type: 'Pages' }]
		})
	})
})
