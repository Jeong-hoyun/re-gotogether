import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice.js/apiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
