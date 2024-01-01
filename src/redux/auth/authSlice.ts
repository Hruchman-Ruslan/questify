import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./authOperations";

export interface AuthState {
  userData: {
    email: string | null;
    password: string | null;
  };
  isAuth: boolean;
  refresh: boolean;
  refreshToken: string | null;
  sid: string | null;
}

interface AuthPayload {
  userData: {
    email: string;
    password: string;
  };
  isAuth: boolean;
  refresh: boolean;
  refreshToken: string;
  sid: string | null;
}

const initialState: AuthState = {
  userData: { email: null, password: null },
  isAuth: false,
  refresh: false,
  refreshToken: null,
  sid: null,
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
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = { email: null, password: null };
        state.isAuth = false;
        state.refreshToken = null;
        state.sid = null;
      })
      .addCase(
        refresh.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.refreshToken = action.payload.refreshToken;
          state.sid = action.payload.sid;
          state.refresh = true;
        }
      ),
});

export default authSlice.reducer;
