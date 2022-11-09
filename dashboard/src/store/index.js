import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pages/reducers/pageSlice";


const rootReducers = combineReducers({
  pages: pageSlice
})

export const store = configureStore({
  reducer: rootReducers
})