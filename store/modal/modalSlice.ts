import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		isOpen: false
	},
	reducers: {
		onClose(state) {
			state.isOpen = false
		},
		openModal(state) {
			state.isOpen = true
		}
	}
})
export const { onClose, openModal } = modalSlice.actions
export default modalSlice.reducer
