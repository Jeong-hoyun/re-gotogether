import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "../rtk/features/wishSlice";

export const store = configureStore({
  reducer: {
    wish: wishReducer,
  },
});
