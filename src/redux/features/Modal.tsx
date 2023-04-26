import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InfoModalState {
  value: boolean;
}

export const modalSlice = createSlice({
  name: "infoModal",
  initialState: { info: false , privacy: false, option: false},
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

  },
});

export const { showInfoModal, closeInfoModal, showOptionModal, closeOptionModal, showPrivacyModal, closePrivacyModal } = modalSlice.actions;


export default modalSlice.reducer;
