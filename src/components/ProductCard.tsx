import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
} from "@mui/material"
import type { Product } from "../types/product"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const image =
    product.images && product.images.length > 0
      ? product.images[0]
      : "https://via.placeholder.com/500x350?text=PadelLab"

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        transition: "all 0.25s ease",
        backgroundColor: "#fff",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.16)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={product.name}
          sx={{
            objectFit: "cover",
            backgroundColor: "#f3f4f6",
          }}
        />

        <Chip
          label={product.category}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            backgroundColor: "#111827",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.5 }}>
        <Typography
          variant="body2"
          sx={{
            color: "#16a34a",
            fontWeight: 800,
            mb: 0.5,
          }}
        >
          {product.brand}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "#111827",
            minHeight: 58,
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            mt: 1,
            minHeight: 44,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              color: "#111827",
            }}
          >
            {product.price} €
          </Typography>

          <Button
            variant="contained"
            disabled={product.stock <= 0}
            sx={{
              backgroundColor: "#111827",
              borderRadius: 999,
              px: 2.5,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#16a34a",
              },
            }}
          >
            {product.stock > 0 ? "Comprar" : "Sin stock"}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}