// src/components/CategorySection.tsx

import { Box, Typography, Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import type { Product } from "../types/product"

type Props = {
  title: string
  subtitle: string
  products: Product[]
  href: string
}

export default function CategorySection({
  title,
  subtitle,
  products,
  href,
}: Props) {
  if (products.length === 0) return null

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 5, md: 7 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "end" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: "#111827",
              mb: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={href}
          variant="outlined"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            fontWeight: "bold",
            color: "#111827",
            borderColor: "#111827",
            px: 3,
            "&:hover": {
              backgroundColor: "#111827",
              color: "#fff",
              borderColor: "#111827",
            },
          }}
        >
          Ver todo
        </Button>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={`${product.category}-${product.id}`}
            product={product}
          />
        ))}
      </Box>
    </Box>
  )
}