import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const gameSlice = createSlice({
  name: "game",
  initialState: {
    currentCharIndex: 0,
    currentTextIndex: 0,
    timer: 10,
    english: [""],
    japanese: [""],
  },
  reducers: {
    setCurrentCharIndex: (state, { payload }) => {
      state.currentCharIndex = payload;
    },
    addCurrentCharIndex: (state, { payload }) => {
      state.currentCharIndex += payload;
    },
    setCurrentTextIndex: (state, { payload }) => {
      state.currentTextIndex = payload;
    },
    addCurrentTextIndex: (state, { payload }) => {
      state.currentTextIndex += payload;
    },
    clearTimer: (state) => {
      state.timer = 10;
    },
    setTimer: (state, { payload }: { payload: number }) => {
      state.timer = payload;
    },
    subTimer: (state) => {
      state.timer -= 1;
    },

    addJapaneseText: (state, { payload }: { payload: string }) => {
      state.japanese = [...state.japanese, payload];
    },
    clearJapaneseText: (state) => {
      state.japanese = [];
    },
    clearEnglishText: (state) => {
      state.english = [];
    },
    addEnglishText: (state, { payload }: { payload: string }) => {
      state.english = [...state.english, payload];
    },
  },
});

export const {
  setCurrentCharIndex,
  setCurrentTextIndex,
  clearTimer,
  setTimer,
  addJapaneseText,
  subTimer,
  clearJapaneseText,
  clearEnglishText,
  addEnglishText,
  addCurrentTextIndex,
  addCurrentCharIndex,
} = gameSlice.actions;

export default gameSlice.reducer;
