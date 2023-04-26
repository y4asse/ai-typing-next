import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export const scoreSlice = createSlice({
  name: "score",
  initialState: { value: 0 },
  reducers: {
    clearScore: (state) => {
      state.value = 0;
    },
    addScore: (state, {payload}) => {
      state.value += payload;
    },
    subScore: (state, {payload}) => {
      state.value -= payload;
    },
  },
});

export const { addScore, subScore, clearScore } = scoreSlice.actions;

export const selectCount = (state: RootState) => state.score.value;

export default scoreSlice.reducer;
