import {
	IAboutInfo,
	IAboutOwner,
	IAboutTablo
} from '../../../interfaces/about.interface'
import { api } from '../api'

export const aboutApi = api.injectEndpoints({
	endpoints: (builder) => ({
		fetchAboutInfo: builder.query<IAboutInfo[], null>({
			query: () => ({
				url: '/about/info'
			})
		}),
		fetchAboutOwner: builder.query<IAboutOwner[], null>({
			query: () => ({
				url: '/about/owner'
			})
		}),
		fetchAboutTablo: builder.query<IAboutTablo[], null>({
			query: () => ({
				url: '/about/tablo'
			})
		})
	})
})
