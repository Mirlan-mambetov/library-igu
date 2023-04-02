import { IInternetLinkCategory } from '../../../interfaces/Internet-link-interface'
import { api } from '../api'

export const internetLinksApi = api.injectEndpoints({
	endpoints: build => ({
		fetchLinks: build.query<IInternetLinkCategory[], null>({
			query: () => ({
				url: '/internet',
				method: 'Get'
			}),
			providesTags: ['INTERNETLINKS']
		})
	})
})
