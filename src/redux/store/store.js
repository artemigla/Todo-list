import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from '../../components/TodoSlice.js'
export const store = configureStore({
  reducer: {
    todo: TodoSlice
  }
})
