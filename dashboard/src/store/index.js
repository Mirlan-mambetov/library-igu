import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modal/reducers/modalSlice"
import pageSlice from "./pages/reducers/pageSlice"


const rootReducers = combineReducers({
  pages: pageSlice,
  modal: modalSlice
})

export const store = configureStore({
  reducer: rootReducers
})