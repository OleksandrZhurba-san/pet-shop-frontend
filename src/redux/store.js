import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";

const store = configureStore({
  reducer: { categories },
});
export default store;
