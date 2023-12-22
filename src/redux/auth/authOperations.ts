// authOperations.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://questify-backend.goit.global";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      setAuthHeader(data.token);
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
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
