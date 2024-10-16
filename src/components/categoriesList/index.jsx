import { useSelector } from "react-redux";
import CategoryCard from "../categoryCard";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoriesList({ page }) {
  const {
    data: categories,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  if (isLoading) {
    return <>Loading..</>;
  }
  if (isError) {
    return <>Error: {message}</>;
  }
  const displayedCategories =
    page === "home" ? categories.slice(0, 4) : categories;

  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: "64px", fontWeight: "bold" }}
        >
          Categories
        </Typography>

        {page === "home" && (
          <Button
            variant="outlined"
            color="disabled"
            sx={{
              fontSize: "16px",
              padding: "8px 16px",
              color: "#8B8B8B",
              maxHeight: "36px",
            }}
            onClick={() => navigate("/categories")}
          >
            All Categories
          </Button>
        )}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {displayedCategories.map((category) => {
          return <CategoryCard key={category.id} {...category} />;
        })}
      </Box>
    </Box>
  );
}
