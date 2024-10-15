import { CategoriesList, DiscountForm } from "../../components";
import { Box, Button, Typography } from "@mui/material";
import banner from "../../assets/banner.png";

export default function Home() {
  const h1 = {
    color: "white",
    fontWeight: "bold",
    fontSize: "96",
    textAlign: "start",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maxHeight: "600px",
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          position: "relative",
          padding: "80px 40px",
          gap: "40px",
        }}
      >
        <Typography variant="h1" sx={h1}>
          Amazing Discounts
          <br /> on Pets Products!
        </Typography>
        <Button variant="contained" color="primary" sx={{ width: 218 }}>
          Check out
        </Button>
      </Box>
      <CategoriesList page="home" />
      <DiscountForm />
    </Box>
  );
}
