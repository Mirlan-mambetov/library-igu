import { createSlice } from '@reduxjs/toolkit'
import { fetchPages } from '../actions/pageActions'

const initialPagesState = {
  pages: [],
  page: [],
  isLoading: false,
  errors: ""
}

const pageSlice = createSlice({
  name: "pages",
  initialState: initialPagesState,
  reducers: {
    getOnePage(state, action) {
      state.page = state.pages.filter(p => p.id === action.payload)
    }
  },
  extraReducers: {
    [fetchPages.pending]: (state) => {
      state.isLoading = true
    },
    [fetchPages.fulfilled]: (state, action) => {
      state.isLoading = false
      state.pages = action.payload
    },
    [fetchPages.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export const { getOnePage } = pageSlice.actions
export default pageSlice.reducer