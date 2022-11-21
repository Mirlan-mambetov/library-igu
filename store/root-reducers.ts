import { api } from './api/api'
import modalSlice from './modal/modalSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	modal: modalSlice
})
