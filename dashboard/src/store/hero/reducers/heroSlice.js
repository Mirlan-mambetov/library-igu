import { createSlice } from "@reduxjs/toolkit"
import { updateHero } from '../actions/hero-actions'


export const heroSlice = createSlice({
  name: "hero",
  initialState: {
    isLoading: false,
    errors: "",
    success: ""
  },
  extraReducers: {
    [updateHero.pending]: (state) => {
      state.isLoading = true
    },
    [updateHero.fulfilled]: (state, action) => {
      state.isLoading = false
      state.success = action.payload
    },
    [updateHero.rejected]: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
    }
  }
})
export default heroSlice.reducer