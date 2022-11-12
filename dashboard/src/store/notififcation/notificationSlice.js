import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isActive: false
}

export const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    activeNotification: (state, action) => {
      state.isActive = true
      state.message = action.payload
    },
    noneActiveNotification: (state) => {
      state.isActive = false
      state.message = ""
    }
  }
})

export const { activeNotification, noneActiveNotification } = NotificationSlice.actions
export default NotificationSlice.reducer