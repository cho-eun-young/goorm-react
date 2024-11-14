import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewEditTagsModal: false,
  viewAddTagsModal: false,
  viewCreateTagsModal: false,
  viewFilterTagsModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // dispatch(toggleTagsModal({type:'edit',view:true}))' add | edit

    toggleTagsModal: (state, { payload }) => {
      const { type, view } = payload;
      if (type === "add") {
        state.viewAddTagsModal = view;
      } else {
        state.viewEditTagsModal = view;
      }
    },

    toggleCreateNoteModal: (state, action) => {
      state.viewCreateTagsModal = action.payload;
    },
    toggleFiltersModal: (state, action) => {
      state.viewFilterTagsModal = action.payload;
    },
  },
});
export const { toggleCreateNoteModa, toggleTagsModal, toggleFiltersModal } =
  modalSlice.actions;
export default modalSlice.reducer;
