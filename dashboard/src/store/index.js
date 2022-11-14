import { combineReducers, configureStore } from "@reduxjs/toolkit"
import booksCardSlice from "./bookscard/booksCardSlice"
import heroSlice from "./hero/reducers/heroSlice"
import modalSlice from "./modal/reducers/modalSlice"
import notificationSlice from "./notififcation/notificationSlice"
import pageSlice from "./pages/reducers/pageSlice"


const rootReducers = combineReducers({
  pages: pageSlice,
  modal: modalSlice,
  hero: heroSlice,
  notification: notificationSlice,
  booksCard: booksCardSlice
})

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})