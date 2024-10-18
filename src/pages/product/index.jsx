import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
  Badge,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BreadCrumbs } from "../../components/index.js";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { addToCart } from "../../redux/slices/shoppingCartSlice.js";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Product() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showAllText, setShowAllText] = useState(true);

  const {
    data: products,
    isSuccess,
    isError,
    isLoading,
    message,
  } = useSelector((state) => state.products);

  const { data: categories } = useSelector((state) => state.categories);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error: {message}</Typography>;
  if (isSuccess) {
    const product = products.find((product) => product.id === Number(id));
    const { title, price, discont_price, image, description, categoryId } =
      product;
    const category = categories.find((category) => category.id === +categoryId);

    const breadcrumbs = [
      <Typography key="1" onClick={() => navigate("/")}>
        Main page
      </Typography>,

      <Typography onClick={() => navigate("/categories")} key="2">
        Categories
      </Typography>,

      <Typography onClick={() => navigate(`/categories/${categoryId}`)} key="3">
        {category.title}
      </Typography>,
      <Typography key="4">{title}</Typography>,
    ];
    const smallImagesStyle = {
      width: "200px",
      height: "180px",
      objectFit: "cover",
      borderRadius: "12px",
    };
    const badgeStyle = {
      "& .MuiBadge-badge": {
        fontSize: "20px",
        fontWeight: "500",
        backgroundColor: "#0D50FF",
        padding: "16px 8px",
        borderRadius: "6px",
        right: -50,
      },
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
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };
    return (
      <Box>
        <Stack>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </Stack>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            padding: "20px",
            maxWidth: "1400px",
            width: "100%",
            margin: "auto",
          }}
        >
          {/* Column 1: 3 small images */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box
              component="img"
              src={baseUrl + image}
              alt="Product Image 1"
              sx={smallImagesStyle}
            />
            <Box
              component="img"
              src={baseUrl + image}
              alt="Product Image 1"
              sx={smallImagesStyle}
            />
            <Box
              component="img"
              src={baseUrl + image}
              alt="Product Image 1"
              sx={smallImagesStyle}
            />
          </Box>

          {/* Column 2: Large image */}
          <Box
            component="img"
            src={baseUrl + image}
            alt={title}
            sx={{
              width: "548px",
              height: "572px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          {/* Column 3: Title, price, buttons, description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "40", fontWeight: "bold" }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <Typography sx={{ fontSize: "64px", fontWeight: "600" }}>
                ${discont_price ? discont_price : price}
              </Typography>

              {discont_price && (
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "500",
                      color: "#8b8b8b",
                      textDecoration: "line-through",
                    }}
                  >
                    ${price}
                  </Typography>
                  <Badge
                    color="primary"
                    overlap="rectangular"
                    sx={badgeStyle}
                    badgeContent={
                      discont_price &&
                      `-${Math.ceil(((price - discont_price) / price) * 100)}%`
                    }
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  ></Badge>
                </Box>
              )}
            </Box>

            {/* Buttons */}
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(addToCart({ product, quantity }))}
                sx={{ padding: "16px 32px", width: "316px", height: "58px" }}
              >
                Add to Cart
              </Button>
            </Box>

            {/* Description */}
            <Box
              sx={{
                maxHeight: "100px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <Typography sx={{ marginBottom: "16px", lineHeight: "1.6" }}>
                {showAllText
                  ? description.substring(0, 125) + "..."
                  : description}
              </Typography>
            </Box>

            {/* Read more link */}
            <Button
              variant="text"
              color="info"
              sx={{
                padding: 0,
                textDecoration: "underline",
                color: "#282828",
                fontSize: "16px",
                fontWeight: "500",
              }}
              onClick={() => setShowAllText((prev) => !prev)}
            >
              {showAllText ? "Read more" : "Read less"}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
