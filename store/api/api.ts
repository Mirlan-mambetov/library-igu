import { APP_URI } from '../../api/axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Pages'],
	baseQuery: fetchBaseQuery({
		baseUrl: APP_URI
	}),
	endpoints: builder => ({})
})
