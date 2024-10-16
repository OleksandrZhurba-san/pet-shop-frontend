import { Box, Stack, Typography } from "@mui/material";
import { BreadCrumbs, ProductsList } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Sales() {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Typography key="1" onClick={() => navigate("/")}>
      Main page
    </Typography>,

    <Typography key="2">All Sales</Typography>,
  ];
  return (
    <Box>
      <Stack>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </Stack>
      <ProductsList page="sales" />
    </Box>
  );
}
