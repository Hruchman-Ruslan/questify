import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://questify-backend.goit.global";

export const createCard = createAsyncThunk(
  "/card",
  async (
    card: {
      title: string;
      difficulty: string;
      category: string;
      date: Date;
      time: string;
      type: string;
    },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.post("/card", card);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
