import { createSlice } from "@reduxjs/toolkit";

const modalinitialState = {
  isOpen: false,
  update: false,
  create: false,
  updateName: "",
  createName: "",
  updateId: ""
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
      state.update = false
      state.updateName = ""
      state.create = false
      state.createName = ""
    },
    updateContent(state, action) {
      state.create = false
      state.update = true
      state.updateName = action.payload
      state.createName = ""
    },
    createContent(state, action) {
      state.update = false
      state.create = true
      state.createName = action.payload
      state.updateName = ""
    },
    updateContentId(state, action) {
      state.updateId = action.payload
    }
  }
})

export const {
  openModal,
  closeModal,
  createContent,
  updateContent,
  updateContentId
} = modalSlice.actions
export default modalSlice.reducer