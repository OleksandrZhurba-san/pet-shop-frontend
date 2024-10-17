import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import LogoIcon from "../icons/LogoIcon";
import CartIcon from "../icons/CartIcon";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Navbar() {
  const shoppingCartData = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const totalQuantity = shoppingCartData.data.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setQuantity(totalQuantity);
  }, [shoppingCartData.data]);
  const appBarStyle = {
    bgcolor: "white",
    height: 128,
    justifyContent: "center",
    marginBottom: "40px",
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
    fontSize: "20px",
    fontWeight: "500",
    color: "black",
    textTransform: "none",
  };
  const badgeStyle = {
    "& .MuiBadge-badge": {
      backgroundColor: "#0D50FF",
      width: 26,
      height: 26,
      left: 10,
      top: 13,
      borderRadius: "50%",
    },
  };
  return (
    <AppBar position="static" sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <IconButton edge="start" color="inherit">
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
        </IconButton>

        <Box sx={navbarButtonsBoxStyle}>
          <NavLink to="/">
            <Button sx={navbarButtonsStyle}>Main Page</Button>
          </NavLink>
          <NavLink to="/categories">
            <Button sx={navbarButtonsStyle}>Categories</Button>
          </NavLink>
          <NavLink to="/products">
            <Button sx={navbarButtonsStyle}>All products</Button>
          </NavLink>
          <NavLink to="/sales">
            <Button sx={navbarButtonsStyle}>All sales</Button>
          </NavLink>
        </Box>

        <IconButton edge="end">
          <Badge
            color="primary"
            overlap="circular"
            badgeContent={quantity}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={badgeStyle}
          >
            <NavLink>
              <CartIcon />
            </NavLink>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
