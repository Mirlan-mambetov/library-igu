import { APP_URI } from '../../api/axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Pages', 'Arrival', 'Teachers'],
	baseQuery: fetchBaseQuery({
		baseUrl: APP_URI
	}),
	endpoints: (builder) => ({})
})
