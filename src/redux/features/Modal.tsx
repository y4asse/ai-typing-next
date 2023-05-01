import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export const modalSlice = createSlice({
  name: "infoModal",
  initialState: { info: false , privacy: false, option: false, error: false},
  reducers: {
    showInfoModal: (state) => {
      state.info = true;
    },
    closeInfoModal: (state) => {
      state.info = false;
    },
    showPrivacyModal: (state) => {
      state.privacy = true;
    },
    closePrivacyModal: (state) => {
      state.privacy = false;
    },
    showOptionModal: (state) => {
      state.option = true;
    },
    closeOptionModal: (state) => {
      state.option = false;
    },
    showErrorModal: (state) => {
      state.error = true;
    },
    closeErrorModal: (state) => {
      state.error = false;
    },

  },
});

export const {
  showInfoModal,
  closeInfoModal,
  showOptionModal,
  closeOptionModal,
  showPrivacyModal,
  closePrivacyModal,
  showErrorModal,
  closeErrorModal,
} = modalSlice.actions;


export default modalSlice.reducer;
