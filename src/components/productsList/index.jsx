import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../productCard";
import { Box, Typography } from "@mui/material";

export default function ProductsList({ id }) {
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );

  const navigate = useNavigate();
  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {message}</Typography>;
  if (isSuccess) {
    let products = data.filter((product) => product.categoryId === +id);

    //TODO: filter sort logic
    return (
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          {products.map((product) => {
            return <ProductCard key={product.id} {...product}></ProductCard>;
          })}
        </Box>
      </Box>
    );
  }
}
