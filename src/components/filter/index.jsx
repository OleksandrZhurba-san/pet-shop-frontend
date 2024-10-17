import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ProductFilters({ onFiltersChange }) {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handlePriceFromChange = (e) => {
    setPriceFrom(e.target.value);
    onFiltersChange({
      priceFrom: e.target.value,
      priceTo,
      isDiscounted,
      sortOrder,
    });
  };

  const handlePriceToChange = (e) => {
    setPriceTo(e.target.value);
    onFiltersChange({
      priceFrom,
      priceTo: e.target.value,
      isDiscounted,
      sortOrder,
    });
  };

  const handleDiscountedChange = (e) => {
    setIsDiscounted(e.target.checked);
    onFiltersChange({
      priceFrom,
      priceTo,
      isDiscounted: e.target.checked,
      sortOrder,
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onFiltersChange({
      priceFrom,
      priceTo,
      isDiscounted,
      sortOrder: e.target.value,
    });
  };
  const labelStyle = {
    fontSize: "20px",
    fontWeight: "500",
  };
  const textFieldStyle = {
    width: "112px",
    height: "36px",
    fontSize: "16px",
    "& input": {
      padding: "8px",
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "6px",
      },
    },
    "& input::placeholder": {
      color: "#dddddd",
    },
  };
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const selectStyle = {
    width: "112px",
    height: "36px",
    fontSize: "16px",
    "& .MuiSelect-select": {
      padding: "8px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "6px",
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      {/* Price Label with From and To Fields */}
      <Box sx={boxStyle}>
        <Typography sx={{ ...labelStyle, minWidth: "80px" }}>Price</Typography>
        <TextField
          type="number"
          placeholder="From"
          value={priceFrom}
          onChange={handlePriceFromChange}
          sx={textFieldStyle}
        />
        <TextField
          type="number"
          placeholder="To"
          value={priceTo}
          onChange={handlePriceToChange}
          sx={textFieldStyle}
        />
      </Box>

      {/* Discounted Items Checkbox */}
      <FormControlLabel
        label="Discounted Items"
        labelPlacement="start"
        sx={{ fontSize: "20px", display: "flex", gap: "16px" }}
        control={
          <Checkbox
            checked={isDiscounted}
            onChange={handleDiscountedChange}
            color="primary"
            sx={{ "& .MuiSvgIcon-root": { fontSize: "36px" } }}
          />
        }
        slotProps={{
          typography: { sx: labelStyle },
        }}
      />

      {/* Sort Options */}
      <Box sx={boxStyle}>
        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
          Sort By
        </Typography>
        <FormControl sx={selectStyle}>
          <Select value={sortOrder} onChange={handleSortChange}>
            <MenuItem value="default">by default</MenuItem>
            <MenuItem value="az">A-Z</MenuItem>
            <MenuItem value="za">Z-A</MenuItem>
            <MenuItem value="priceAsc">price: low-high</MenuItem>
            <MenuItem value="priceDesc">price: high-low</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
