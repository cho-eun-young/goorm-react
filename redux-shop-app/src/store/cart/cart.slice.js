import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  totalPrice: 0,
  useId: localStorage.getItem("useId")
    ? JSON.parse(localStorage.getItem("useId"))
    : "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;

      localStorage.setItem("useId", JSON.stringify(state.userId));
    },
    removeUserId: (state) => {
      state.useId = "";
      localStorage.setItem("useId", JSON.stringify(state.userId));
    },
    addToCart: (state, action) => {
      state.products.push({
        // 특정 상품 객체 데이터
        ...action.payload,
        // quantity
        quantity: 1,
        // total
        total: action.payload.price,
      });
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export default cartSlice.reducer;
