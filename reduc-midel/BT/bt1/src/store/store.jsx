import todoReducer from ".";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})