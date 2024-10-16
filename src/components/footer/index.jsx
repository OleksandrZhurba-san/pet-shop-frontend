import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import InstaIcon from "../icons/InstaIcon";
import PhoneIcon from "../icons/PhoneIcon";
import GoogleMap from "../googleMap";

export default function Footer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#f1f3f4",
    ...theme.typography.body2,
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    textAlign: "start",
    boxShadow: "none",
    height: "150px",
  }));
  const cellHeaderStyle = {
    color: "#8b8b8b",
    fontSize: "20px",
  };
  const cellContentStyle = {
    color: "#282828",
    fontSize: "40px",
    fontWeight: "500",
  };
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "0px 40px",
        marginTop: "106px",
        flexGrow: 1,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
        Contact
      </Typography>

      <Grid container spacing={4}>
        <Grid size={8}>
          <Item>
            <Typography variant="h5" sx={cellHeaderStyle}>
              Phone
            </Typography>
            <Typography variant="h3" sx={cellContentStyle}>
              +49 30 915-888492
            </Typography>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            <Typography variant="h5" sx={cellHeaderStyle}>
              Social
            </Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <InstaIcon />
              <PhoneIcon />
            </Box>
          </Item>
        </Grid>

        <Grid size={8}>
          <Item>
            <Typography variant="h5" sx={cellHeaderStyle}>
              Address
            </Typography>
            <Typography variant="h3" sx={cellContentStyle}>
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            <Typography variant="h5" sx={cellHeaderStyle}>
              Working hours
            </Typography>
            <Typography variant="h3" sx={cellContentStyle}>
              24 hour a day
            </Typography>
          </Item>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          width: "100%",
        }}
      >
        {/* <GoogleMap /> */}
      </Box>
    </Box>
  );
}
