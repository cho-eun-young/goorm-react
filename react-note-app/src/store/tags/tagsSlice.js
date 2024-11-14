import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tagsList: [
    { tag: "learning", id: v4() },
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
