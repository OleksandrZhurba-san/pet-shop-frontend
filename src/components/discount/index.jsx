import { Box, Typography, TextField, Button } from "@mui/material";
import pets from "../../assets/discount_pets.png";
import { useState } from "react";

export default function DiscountForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const containerBoxStyle = {
    backgroundColor: "#0D50FF",
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: 1395,
  };
  const imageBoxStyle = {
    backgroundImage: `url(${pets})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 783,
    height: 360,
  };
  const inputStyle = {
    input: { color: "white" },
    label: { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
  };
  return (
    <Box sx={containerBoxStyle}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontSize: "4rem", color: "white" }}
      >
        5% off on the first order
      </Typography>

      {/* image and form */}
      <Box sx={{ display: "flex", gap: "64px" }}>
        <Box sx={imageBoxStyle}></Box>
        <Box sx={{ flex: 1 }}>
          <form>
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
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                color: "black",
                backgroundColor: "white",
                width: "100%",
                mt: 4,
              }}
            >
              Get Discount
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
