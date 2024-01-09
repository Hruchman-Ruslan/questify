import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCard } from "./cardOperations";

interface Card {
  title: string;
  difficulty: string;
  category: string;
  date: string;
  time: string;
  type: string;
}

interface CardState {
  card: Card;
}

const initialState: CardState = {
  card: {
    title: "",
    difficulty: "",
    category: "",
    date: "",
    time: "",
    type: "",
  },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createCard.fulfilled,
      (state, action: PayloadAction<Card>) => {
        state.card = action.payload;
      }
    );
  },
});

export default cardSlice.reducer;
