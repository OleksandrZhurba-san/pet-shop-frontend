import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function CategoryCard({ id, image, title }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/categories/${id}`)}
      sx={{ maxWidth: 316, boxShadow: "none" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={baseURL + image}
          alt={title}
          sx={{ objectFit: "cover" }}
        ></CardMedia>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
