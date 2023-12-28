import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./authOperations";

export interface AuthState {
  userData: {
    email: string | null;
    password: string | null;
  };
  isAuth: boolean;
}

interface AuthPayload {
  userData: {
    email: string;
    password: string;
  };
  isAuth: boolean;
}

const initialState: AuthState = {
  userData: { email: null, password: null },
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
          state.userData = action.payload.userData;
        }
      )
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
        state.userData = action.payload.userData;
        state.isAuth = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = { email: null, password: null };
        state.isAuth = false;
      }),
});

export default authSlice.reducer;
