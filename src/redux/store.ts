import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./features/Modal";
import scoreReducer from "./features/Scores";
import gameReducer from "./features/Game";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    score: scoreReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
