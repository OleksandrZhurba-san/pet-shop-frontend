import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import LogoIcon from "../icons/LogoIcon";
import CartIcon from "../icons/CartIcon";

export default function Navbar() {
  const appBarStyle = {
    bgcolor: "white",
    height: 128,
    justifyContent: "center",
    boxShadow: "none",
  };
  const toolBarStyle = {
    maxWidth: 1400,
    width: "100%",
    mx: "auto",
    justifyContent: "space-between",
    px: 5,
  };

  const navbarButtonsBoxStyle = {
    display: "flex",
    gap: "4",
  };
  const navbarButtonsStyle = {
    fontSize: "16px",
    color: "black",
    textTransform: "none",
  };
  return (
    <AppBar position="static" sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <IconButton edge="start" color="inherit">
          <LogoIcon />
        </IconButton>
        <Box sx={navbarButtonsBoxStyle}>
          <Button sx={navbarButtonsStyle}>Main Page</Button>
          <Button sx={navbarButtonsStyle}>Categories</Button>
          <Button sx={navbarButtonsStyle}>All products</Button>
          <Button sx={navbarButtonsStyle}>All sales</Button>
        </Box>
        <IconButton edge="end">
          <CartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
