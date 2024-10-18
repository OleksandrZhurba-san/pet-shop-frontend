import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
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
    gap: "32px",
  };

  const navbarButtonsStyle = {
    fontSize: "20px",
    fontWeight: "500",
    color: "black",
    textTransform: "none",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "blue",
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
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { ...navbarButtonsStyle, ...activeStyle }
                : navbarButtonsStyle
            }
          >
            Main Page
          </NavLink>

          <NavLink
            to="/categories"
            style={({ isActive }) =>
              isActive
                ? { ...navbarButtonsStyle, ...activeStyle }
                : navbarButtonsStyle
            }
          >
            Categories
          </NavLink>

          <NavLink
            to="/products"
            style={({ isActive }) =>
              isActive
                ? { ...navbarButtonsStyle, ...activeStyle }
                : navbarButtonsStyle
            }
          >
            All products
          </NavLink>

          <NavLink
            to="/sales"
            style={({ isActive }) =>
              isActive
                ? { ...navbarButtonsStyle, ...activeStyle }
                : navbarButtonsStyle
            }
          >
            All sales
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
            <NavLink to="/cart">
              <CartIcon />
            </NavLink>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
