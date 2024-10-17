import { Stack, Typography } from "@mui/material";
import { BreadCrumbs, CategoriesList} from "../../components";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Typography key="1" onClick={() => navigate("/")}>
      Main page
    </Typography>,

    <Typography key="2">Categories</Typography>,
  ];
  return (
    <Stack>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <CategoriesList page="categories"></CategoriesList>;
    </Stack>
  );
}
