import { useSelector } from "react-redux";
import ProductCard from "../productCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductsList({ id, page }) {
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (page === "sales") {
      setTitle("Discounted items");
    } else if (page === "home") {
      setTitle("Sales");
    } else if (page === "products") {
      setTitle("All products");
    }
  }, [page]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {message}</Typography>;
  if (isSuccess) {
    let products = [...data];
    if (page === "sales") {
      products = data.filter((product) => product.discont_price);
    } else if (page === "categories") {
      products = data.filter((product) => product.categoryId === +id);
    } else if (page === "home") {
      products = data.filter((product) => product.discont_price).slice(0, 4);
    }

    //TODO: filter sort logic
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "start",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: "64px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            {products.map((product) => {
              return <ProductCard key={product.id} {...product}></ProductCard>;
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}
