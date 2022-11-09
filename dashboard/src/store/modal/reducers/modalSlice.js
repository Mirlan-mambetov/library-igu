import { createSlice } from "@reduxjs/toolkit";

const modalinitialState = {
  isOpen: false
}
const modalSlice = createSlice({
  name: "modal",
  initialState: modalinitialState,
  reducers: {
    openModal(state) {
      state.isOpen = true
    },
    closeModal(state) {
      state.isOpen = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer