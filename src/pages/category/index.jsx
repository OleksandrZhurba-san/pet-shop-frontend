import { Box, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { BreadCrumbs, ProductsList } from "../../components/";
import { useSelector } from "react-redux";

export default function Category() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: categories } = useSelector((state) => state.categories);
  const categoryName = categories.find(
    (category) => category.id === Number(id)
  )?.title;

  const breadcrumbs = [
    <Typography key="1" onClick={() => navigate("/")}>
      Main page
    </Typography>,

    <Typography onClick={() => navigate("/categories")} key="2">
      Categories
    </Typography>,
    <Typography key="3">{categoryName}</Typography>,
  ];
  return (
    <Box>
      <Stack>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </Stack>
      <ProductsList page="categories" id={id} />
    </Box>
  );
}
