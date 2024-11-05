import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  isLoading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
