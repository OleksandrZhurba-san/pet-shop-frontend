import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/slices/categoriesSlice";
import CategoryCard from "../categoryCard";
import { Box, Typography, Button, Stack, Breadcrumbs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Separator from "../separator";

export default function CategoriesList({ page }) {
  const {
    data: categories,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const navLinkStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #DDDDDD",
    textDecoration: "none",
    color: "#8B8B8B",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F1F3F4",
    },
  };
  const navLinkStyleActive = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #DDDDDD",
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: 500,
  };

  const breadcrumbs = [
    <Typography sx={navLinkStyle} key="1" onClick={() => navigate("/")}>
      Main page
    </Typography>,

    <Typography sx={navLinkStyleActive} key="2">
      Categories
    </Typography>,
  ];

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

        {page === "home" ? (
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
        ) : (
          <Stack>
            <Breadcrumbs separator={<Separator />}>{breadcrumbs}</Breadcrumbs>
          </Stack>
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
