import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "../rtk/features/wishSlice";
import { persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    wish: wishReducer,
  },
});
