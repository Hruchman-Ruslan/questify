import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://questify-backend.goit.global";

const setAuthHeader = (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
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
    try {
      await axios.post("/auth/logout");
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
