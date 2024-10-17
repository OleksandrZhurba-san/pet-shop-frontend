import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push({
        product: action.payload.product,
        quantity: action.payload.quantity,
      });
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((i) => i.product.id !== action.payload);
    },
    addItem: (state, action) => {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    removeItem: (state, action) => {
      const item = state.data.find(
        (item) => item.product.id === action.payload
      );
      if (item) {
        item.quantity--;
      }
    },
    clearCart(state) {
      state.data = [];
    },
  },
});

export const { addToCart, removeFromCart, addItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
