import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/couter'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})