import {
  Box,
  Button,
  Typography,
  TextField,
  Modal,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  selectCartItems,
} from "../../redux/slices/shoppingCartSlice";
import { ShoppingCartItem } from "../../components/";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export default function ShoppingCart() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleClose() {
    setClicked(false);
    dispatch(clearCart());

    if (
      formData.name !== "" &&
      formData.phone !== "" &&
      formData.email !== ""
    ) {
      setOpen(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const orderData = { ...formData, products: cartItems };
  const total = cartItems.reduce((sum, item) => {
    const { product, quantity } = item;
    const price = product.discont_price ? product.discont_price : product.price;

    return sum + quantity * price;
  }, 0);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await axios(baseUrl + "/order/send", orderData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setClicked(true);
    if (
      formData.name !== "" &&
      formData.phone !== "" &&
      formData.email !== ""
    ) {
      setOpen(true);
    }
  }
  const inputStyle = {
    input: {
      color: "black", // Set input text color to black
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white", // Set background color to white
      "& fieldset": {
        borderColor: "#8B8B8B", // Border color of the input
      },
      "&:hover fieldset": {
        borderColor: "#8B8B8B", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8B8B8B", // Border color when focused
      },
    },
    "& .MuiInputLabel-root": {
      color: "#8B8B8B", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#8B8B8B", // Label color when focused
    },
  };
  const modalStyle = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 548,
    padding: "32px",
    bgcolor: "#0D50FF",
    border: "none",
    color: "white",
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: "64px", fontWeight: "bold" }}
        >
          Shopping cart
        </Typography>

        <Button
          variant="outlined"
          color="disabled"
          sx={{
            fontSize: "16px",
            padding: "8px 16px",
            color: "#8B8B8B",
            maxHeight: "36px",
          }}
          onClick={() => navigate("/products")}
        >
          Back to the store
        </Button>
      </Box>
      {cartItems.length > 0 ? (
        <Box
          sx={{
            display: "flex",
          }}
        >
          {/**Shopping cart Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "588px",
              maxWidth: "780px",
              overflowY: "auto",
              padding: "16px",
              gap: "16px",
            }}
          >
            {/** Order List */}
            {cartItems &&
              cartItems.map((item, idx) => {
                return <ShoppingCartItem key={idx} item={item} />;
              })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              padding: "32px",
              backgroundColor: "#F1F3F4",
              maxWidth: "548px",
            }}
          >
            {/** Order Details */}
            <Typography
              variant="h4"
              sx={{ fontSize: "40px", fontWeight: "bold" }}
            >
              Order details
            </Typography>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "500", color: "#8b8b8b" }}
            >
              {cartItems.length} items
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ fontSize: "40px", fontWeight: "500", color: "#8b8b8b" }}
              >
                Total
              </Typography>
              <Typography sx={{ fontSize: "64px", fontWeight: "600" }}>
                ${total}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              {/**form box */}
              <form onSubmit={handleClick}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  sx={inputStyle}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={inputStyle}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  sx={inputStyle}
                  required
                />
                <Button
                  variant={clicked ? "outlined" : "contained"}
                  color="primary"
                  type="submit"
                  sx={{
                    width: "100%",
                    mt: 4,
                  }}
                >
                  {clicked ? "The Order is Placed" : "Order"}
                </Button>
              </form>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{ ...modalStyle, position: "relative" }}>
                  {/* Close button */}
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      color: "white",
                      width: "44px",
                      height: "44px",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  {/* Modal content */}
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontSize: "40px", fontWeight: 500 }}
                  >
                    Congratulations!
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: "20px", mt: 2 }}
                  >
                    Your order has been successfully placed on the website.
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: "20px", mt: 2 }}
                  >
                    A manager will contact you shortly to confirm your order.
                  </Typography>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>
            Looks like you have no items in your shopping cart
          </Typography>
          <Button
            onClick={() => navigate("/products")}
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              maxWidth: "313px",
              padding: "16px 56px",
              mt: 4,
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      )}
    </Box>
  );
}
