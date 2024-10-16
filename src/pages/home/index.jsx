import {
  Banner,
  CategoriesList,
  DiscountForm,
  ProductsList,
} from "../../components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      <Banner />
      <CategoriesList page="home" />
      <DiscountForm />
      <ProductsList page="home" />
    </Box>
  );
}
