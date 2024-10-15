import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function CategoryCard({ image, title }) {
  return (
    <Card sx={{ maxWidth: 316, boxShadow: "none" }}>
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
