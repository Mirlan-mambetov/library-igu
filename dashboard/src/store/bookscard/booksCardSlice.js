import { createSlice } from "@reduxjs/toolkit";
import { UpdateBooksCard } from "./booksCardAction";


export const booksCardSlice = createSlice({
  name: "booksCard",
  initialState: {
    isLoading: false,
    errors: null,
    success: null
  },
  extraReducers: {
    [UpdateBooksCard.pending]: (state) => {
      state.isLoading = true
    },
    [UpdateBooksCard.fulfilled]: (state, action) => {
      state.isLoading = false
      state.success = action.payload
    },
    [UpdateBooksCard.rejected]: (state, action) => {
      state.isLoading = false
      state.errors = action.payload
      state.success = null
    }
  }
})
export default booksCardSlice.reducer