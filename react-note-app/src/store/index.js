// Sub Reducers => Root Reducer => Store Object
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuSlice";
import modalReducer from "./modal/modalSlice";
import notesReducer from "./notesList/notesListSlice";
import tagsReducer from "./tags/tagsSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    modal: modalReducer,
    tags: tagsReducer,
    noteList: notesReducer,
  },
});
