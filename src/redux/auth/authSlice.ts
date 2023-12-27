import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./authOperations";

export interface AuthState {
  user: {
    email: string | null;
    password: string | null;
  };
  token: string | null;
  isAuth: boolean;
}

interface AuthPayload {
  user: {
    email: string;
    password: string;
  };
  token: string;
}

const initialState: AuthState = {
  user: { email: null, password: null },
  token: null,
  isAuth: false,
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
          state.user = action.payload.user;
        }
      )
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isAuth = false;
      }),
});

export default authSlice.reducer;
