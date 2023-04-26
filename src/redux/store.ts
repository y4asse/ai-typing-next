import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./features/Modal";
import scoreReducer from "./features/Scores";
import englishTextReducer from "./features/English";
import japaneseTextReducer from "./features/Japanese";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    score: scoreReducer,
    englishText: englishTextReducer,
    japaneseText: japaneseTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
