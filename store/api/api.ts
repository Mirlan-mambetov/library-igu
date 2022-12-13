import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const APP_URI = process.env.NEXT_PUBLIC_API_URI

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Pages'],
	baseQuery: fetchBaseQuery({
		baseUrl: APP_URI
	}),
	endpoints: (builder) => ({})
})
