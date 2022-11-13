import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishReducer from "./features/wishSlice";
import loginReducer from "./features/loginSlice";
import recentReducer from "./features/recentSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

const createNoopStorage = () => {
  return {
    getItem(_key: string | null) {
      return Promise.resolve(null);
    },
    setItem(_key: string | null, value: string | null) {
      return Promise.resolve(value);
    },
    removeItem(_key: string | null) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["recent"],
};
const rootReducer = combineReducers({
  wish: wishReducer,
  login: loginReducer,
  recent: recentReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type AppStoreType = ReturnType<typeof store.getState>;

export const useAppStore: TypedUseSelectorHook<AppStoreType> = (
  selector,
  equalityFn,
) => {
  return useSelector(selector, equalityFn);
};

export const persistor = persistStore(store);
