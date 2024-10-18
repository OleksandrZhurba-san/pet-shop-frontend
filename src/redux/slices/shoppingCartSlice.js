import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.data.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item) {
        item.quantity = item.quantity + action.payload.quantity;
      } else {
        state.data.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((i) => i.product.id !== action.payload);
    },
    addItem: (state, action) => {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        item.quantity = item.quantity + 1;
      }
    },
    removeItem: (state, action) => {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );
      if (item) {
        item.quantity = item.quantity - 1;
      }
    },
    clearCart(state) {
      state.data = [];
    },
  },
});

export const { addToCart, removeFromCart, addItem, removeItem, clearCart } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.data;
export default cartSlice.reducer;
