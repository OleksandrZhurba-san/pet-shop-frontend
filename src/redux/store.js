import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";
import products from "./slices/productsSlice";
import cart from "./slices/shoppingCartSlice";

const store = configureStore({
  reducer: { categories, products, cart },
});
export default store;
