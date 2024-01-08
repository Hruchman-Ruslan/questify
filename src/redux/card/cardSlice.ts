import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCard } from "./cardOperations";

interface Card {
  title: string;
  difficulty: string;
  category: string;
  date: Date;
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
    date: new Date(),
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
