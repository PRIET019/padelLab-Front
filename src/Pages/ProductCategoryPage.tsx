// src/pages/ProductCategoryPage.tsx

import { useEffect, useState } from "react"
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Stack,
} from "@mui/material"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import type { Product } from "../types/product"
import { obtenerCatalogo } from "../service/CatalogService"

type ProductCategoryPageProps = {
  category: string
  title: string
  subtitle: string
}

export default function ProductCategoryPage({
  category,
  title,
  subtitle,
}: ProductCategoryPageProps) {
  const [productos, setProductos] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    obtenerCatalogo()
      .then((data) => {
        const productosFiltrados = data.filter(
          (producto) => producto.category === category
        )

        setProductos(productosFiltrados)
        setError(null)
      })
      .catch(() => {
        setError("No se han podido cargar los productos")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [category])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f4f6f8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 50%, #16a34a 100%)",
          color: "#fff",
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 7, md: 10 },
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#86efac",
            fontWeight: 900,
            letterSpacing: 4,
          }}
        >
          PADELLAB STORE
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 950,
            mt: 2,
            mb: 2,
            fontSize: { xs: "2.8rem", md: "4.8rem" },
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 760,
            color: "#e5e7eb",
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 7 },
          boxSizing: "border-box",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "#111827",
              }}
            >
              {title}
            </Typography>

            <Typography sx={{ color: "#6b7280", mt: 1 }}>
              {productos.length} productos encontrados
            </Typography>
          </Box>

          <Button
            variant="outlined"
            href="/"
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 800,
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
            Volver al inicio
          </Button>
        </Stack>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ my: 4 }}>
            {error}
          </Alert>
        )}

        {!loading && !error && productos.length > 0 && (
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
            {productos.map((producto) => (
              <ProductCard
                key={`${producto.category}-${producto.id}`}
                product={producto}
              />
            ))}
          </Box>
        )}

        {!loading && !error && productos.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
              backgroundColor: "#fff",
              borderRadius: 4,
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              No hay productos en esta categoría.
            </Typography>

            <Typography sx={{ color: "#6b7280", mt: 1 }}>
              Revisa que MongoDB tenga productos con category "{category}".
            </Typography>
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  )
}