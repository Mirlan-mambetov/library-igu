import { combineReducers, configureStore } from "@reduxjs/toolkit"
import NotificationSlice from "./notififcation/notificationSlice"
import HeroSlice from "./hero/reducers/heroSlice"
import modalSlice from "./modal/reducers/modalSlice"
import pageSlice from "./pages/reducers/pageSlice"


const rootReducers = combineReducers({
  pages: pageSlice,
  modal: modalSlice,
  hero: HeroSlice,
  notification: NotificationSlice
})

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})