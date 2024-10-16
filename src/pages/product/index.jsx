import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const { data, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.products
  );
  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {message}</Typography>;
  if (isSuccess) {
    return <Box></Box>;
  }
}
