import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mainNote: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const notesListsSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {},
});

export default notesListsSlice.reducer;
