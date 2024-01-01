import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://questify-backend.goit.global";

const setAuthHeader = (refreshToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

// const setAuthRefreshHeader = (refreshToken: string) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
// };

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      setAuthHeader(data.refreshToken);
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
      setAuthHeader(data.refreshToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_: void, thunkAPI) => {
    try {
      await axios.post("/auth/logout");
      // clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (credentials: { sid: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/refresh", credentials);
      console.log("data", data);
      setAuthHeader(data.refreshToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
