import { APP_URI } from '../../services/api.config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Pages', 'WorksByCategory', 'Books', 'Window'],
	baseQuery: fetchBaseQuery({
		baseUrl: APP_URI
	}),
	endpoints: (builder) => ({})
})
