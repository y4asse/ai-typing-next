import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface englishTextState {
  value: string[];
}

const initialState = {
  value: [],
} as englishTextState;

export const englishTextSlice = createSlice({
  name: "englishText",
  initialState,
  reducers: {
    clearEnglishText: (state) => {
      state.value = [];
    },
    addEnglishText: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addEnglishText, clearEnglishText } = englishTextSlice.actions;

export const selectCount = (state: RootState) => state.englishText.value;

export default englishTextSlice.reducer;
