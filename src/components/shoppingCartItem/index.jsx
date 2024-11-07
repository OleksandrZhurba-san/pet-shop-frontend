import { Box, Typography, IconButton } from "@mui/material";
import ItemAction from "../tudasudaItem";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/shoppingCartSlice";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function ShoppingCartItem({ item }) {
  const { discont_price, id, image, price, title } = item.product;
  const quantity = item.quantity;
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "16px",
        border: "1px solid #dddddd",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      {/* Column 1: Product Image */}
      <Box sx={{ flex: "0 0 200px" }}>
        <img
          src={baseURL + image}
          alt={title}
          style={{
            width: "200px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Column 2: Product Title, ItemActions, and Price */}
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {title}
        </Typography>

        {/* ItemActions component for Add/Remove functionality */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <ItemAction page="cart" quantity={quantity} itemId={id} />

          {/* Price Display */}
          <Typography
            sx={{
              margin: "0 16px 0 32px",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            ${discont_price ? discont_price * quantity : price * quantity}
          </Typography>
          {discont_price && (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#8b8b8b",
                textDecoration: "line-through",
              }}
            >
              ${price * quantity}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Column 3: Remove */}
      <Typography sx={{ padding: "20px" }}> </Typography>
      <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
        <IconButton onClick={() => dispatch(removeFromCart(id))}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
