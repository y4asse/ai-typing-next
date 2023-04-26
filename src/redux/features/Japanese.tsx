import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface japaneseTextState {
  value: string[];
}

const initialState = {
  value: [],
} as japaneseTextState;

export const japaneseTextSlice = createSlice({
  name: "japaneseText",
  initialState,
  reducers: {
    addJapaneseText: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    clearJapaneseText: (state) => {
      state.value = [];
    },
  },
});

export const { addJapaneseText, clearJapaneseText } = japaneseTextSlice.actions;

export const selectCount = (state: RootState) => state.japaneseText.value;

export default japaneseTextSlice.reducer;
