import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";
import products from "./slices/productsSlice";

const store = configureStore({
  reducer: { categories, products },
});
export default store;
