import { Box } from "@mui/material";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  Home,
  Categories,
  Category,
  Product,
  Sales,
  ShoppingCart,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "./redux/slices/categoriesSlice";
import { getAllProducts } from "./redux/slices/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);
  const mainBoxStyle = {
    maxWidth: 1440,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
  };

  return (
    <Box sx={mainBoxStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
