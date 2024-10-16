import {
  Box,
  Badge,
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
  image,
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
  const badgeStyle = {
    "& .MuiBadge-badge": {
      fontSize: "20px",
      backgroundColor: "#0D50FF",
      padding: "4px 8px",
      borderRadius: "6px",
      top: 28,
      right: 38,
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
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={baseURL + image}
            alt={title}
            sx={{ objectFit: "cover", width: "316px", height: "284px" }}
          />

          <Badge
            color="primary"
            overlap="rectangular"
            badgeContent={
              discont_price &&
              `-${Math.ceil(((price - discont_price) / price) * 100)}%`
            }
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={badgeStyle}
          />
        </Box>
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
