import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

axios.defaults.baseURL = "https://questify-backend.goit.global";

const setAuthHeader = (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      setAuthHeader(data.accessToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_: void, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) return thunkAPI.rejectWithValue(null);

    try {
      setAuthHeader(persistedToken);
      await axios.post("/auth/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.refreshToken;
  const id: string = state.auth.sid || "";

  if (persistedToken === null) return thunkAPI.rejectWithValue(null);

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.post("/auth/refresh", { sid: id });
    console.log("data", data);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
