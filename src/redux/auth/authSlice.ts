import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./authOperations";

export interface AuthState {
  userData: {
    email: string | null;
    password: string | null;
  };
  isAuth: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  sid: string | null;
  newSid: string | null;
  newRefreshToken: string | null;
  newAccessToken: string | null;
}

export interface AuthPayload {
  userData: {
    email: string;
    password: string;
  };
  isAuth: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  accessToken: string | null;
  refreshToken: string;
  sid: string | null;
  newSid: string | null;
  newRefreshToken: string | null;
  newAccessToken: string | null;
}

const initialState: AuthState = {
  userData: { email: null, password: null },
  isAuth: false,
  isLoggedIn: false,
  isRefreshing: false,
  accessToken: null,
  refreshToken: null,
  sid: null,
  newSid: null,
  newRefreshToken: null,
  newAccessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.userData = action.payload.userData;
        }
      )
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
        state.userData = action.payload.userData;
        state.isAuth = true;
        state.isLoggedIn = true;
        state.sid = action.payload.sid;
        state.refreshToken = action.payload.refreshToken;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = { email: null, password: null };
        state.isAuth = false;
        state.isLoggedIn = false;
        state.sid = null;
        state.refreshToken = null;
        state.accessToken = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refresh.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.sid = action.payload.newSid;
          state.refreshToken = action.payload.newRefreshToken;
          state.accessToken = action.payload.newAccessToken;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
        state.refreshToken = null;
      }),
});

export default authSlice.reducer;
