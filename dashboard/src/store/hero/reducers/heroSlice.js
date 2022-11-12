import { createSlice } from "@reduxjs/toolkit";
import { updateHero } from "../actions/hero.action";


const initialState = {
  success: "",
  errors: "",
  isLoading: false
}

export const HeroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
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

export default HeroSlice.reducer