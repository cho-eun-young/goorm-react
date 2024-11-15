import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const notesListsSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tag }) => tag !== payload.tag),
      }));
    },
  },
});

export const { removeTags } = notesListsSlice.actions;
export default notesListsSlice.reducer;
