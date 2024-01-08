import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";

import authSlice from "./auth/authSlice";
import cardSlice from "./card/cardSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["sid", "refreshToken", "accessToken", "isAuth", "userData"],
};

const authReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
