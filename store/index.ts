import { api } from './api/api'
import { rootReducer } from './root-reducers'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({}).concat(api.middleware)
})

export type TypeRootState = ReturnType<typeof rootReducer>
