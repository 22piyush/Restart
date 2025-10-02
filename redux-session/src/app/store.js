import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // default export from slice

export const store = configureStore({
  reducer: {
    todo: todoReducer, // key = "todo", value = reducer function
  },
});
