import { Box, IconButton, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  addToCart,
  removeItem,
} from "../../redux/slices/shoppingCartSlice";

import { Add, Remove } from "@mui/icons-material";
export default function ItemAction({ page, quantity: q, itemId }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(q ? q : 1);

  const handleIncrement = () => {
    if (page === "cart") {
      dispatch(addItem(itemId));
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrement = () => {
    if (page === "cart") {
      dispatch(removeItem(itemId));
      setQuantity(quantity - 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const iconButtonStyle = {
    border: "1px solid #dddddd",
    color: "grey",
    borderRadius: "6px",
    width: "58px",
    height: "58px",
    padding: "0px",
    "&:hover": { backgroundColor: "#f0f0f0" },
  };
  return (
    <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <IconButton onClick={handleDecrement} sx={iconButtonStyle}>
          <Remove />
        </IconButton>
        <TextField
          value={quantity}
          sx={{
            color: "grey",
            "& input": {
              textAlign: "center",
              height: "100%",
            },
          }}
          slotProps={{
            input: {
              style: {
                width: "96px",
                height: "58px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "500",
              },
              readOnly: true,
            },
          }}
        />
        <IconButton onClick={handleIncrement} sx={iconButtonStyle}>
          <Add />
        </IconButton>
      </Box>
      {page !== "cart" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(addToCart({ product, quantity }))}
          sx={{ padding: "16px 32px", width: "316px", height: "58px" }}
        >
          Add to Cart
        </Button>
      )}
    </Box>
  );
}
