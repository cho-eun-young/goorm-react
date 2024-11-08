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

    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    incrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },

    decrementProduct: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
    },

    getTotalPrice: (state, action) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc = +item.total),
        0
      );
    },
  },
});

export const {
  setUserId,
  removeUserId,
  addToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
