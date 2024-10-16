import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsList, Separator } from "../../components/";
import { useSelector } from "react-redux";

export default function Category() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: categories } = useSelector((state) => state.categories);
  const categoryName = categories.find(
    (category) => category.id === Number(id)
  )?.title;

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

    <Typography sx={navLinkStyle} key="2">
      Categories
    </Typography>,
    <Typography sx={navLinkStyleActive} key="3">
      {categoryName}
    </Typography>,
  ];
  return (
    <Box>
      <Stack>
        <Breadcrumbs separator={<Separator />}>{breadcrumbs}</Breadcrumbs>
      </Stack>
      <ProductsList id={id} />
    </Box>
  );
}
