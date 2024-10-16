import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
