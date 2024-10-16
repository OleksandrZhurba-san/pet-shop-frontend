import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import { ProductsList, Separator } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Sales() {
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
      All products
    </Typography>,
  ];
  return (
    <Box>
      <Stack>
        <Breadcrumbs separator={<Separator />}>{breadcrumbs}</Breadcrumbs>
      </Stack>
      <ProductsList page="sales" />
    </Box>
  );
}
