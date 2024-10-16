import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function ProductCard({
  id,
  title,
  price,
  discont_price,
  description,
  image,
  categoryId,
}) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const hoveredButtonBoxStyle = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-45%, -50%)",
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.3s ease",
    width: "100%",
  };
  const buttonStyle = {
    backgroundColor: "#0D50FF",
    color: "white",
    width: "284px",
    height: "58px",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "black",
    },
  };
  return (
    <Card
      onClick={() => navigate(`/products/${id}`)}
      sx={{ maxWidth: 316, maxHeight: 422, position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={baseURL + image}
          alt={title}
          sx={{ objectFit: "cover", width: "316px", height: "284px" }}
        ></CardMedia>
        <CardContent sx={{ textAlign: "start" }}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "16px 0 32px 0",
            }}
          >
            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
              ${price}
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
                ${discont_price}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
      <Box sx={hoveredButtonBoxStyle}>
        <Button variant="contained" sx={buttonStyle}>
          Add to cart
        </Button>
      </Box>
    </Card>
  );
}
