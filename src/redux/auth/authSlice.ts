import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register } from "./authOperations";

export interface AuthState {
  user: {
    email: string | null;
    password: string | null;
  };
  token: string | null;
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
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      register.fulfilled,
      (state, action: PayloadAction<AuthPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }
    ),
});

export default authSlice.reducer;
