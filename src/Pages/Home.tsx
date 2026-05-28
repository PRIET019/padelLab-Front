import { useEffect, useState } from "react"
import {
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Alert,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CategorySection from "../components/CategorySection"
import type { Product } from "../types/product"
import { obtenerCatalogo } from "../service/CatalogService"


export default function Home() {
  const [productos, setProductos] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    obtenerCatalogo()
      .then((data) => {
        setProductos(data)
        setError(null)
      })
      .catch(() => {
        setError("No se ha podido cargar el catálogo")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const palas = productos.filter((p) => p.category === "pala")
  const zapatillas = productos.filter((p) => p.category === "zapatilla")
  const ropa = productos.filter(
    (p) => p.category === "camiseta" || p.category === "pantalon"
  )
  const mochilas = productos.filter((p) => p.category === "mochila")
  const accesorios = productos.filter(
    (p) => p.category === "gorra" || p.category === "munequera"
  )

  const opcionesMenu = [
    {
      label: "Todo el catálogo",
      id: "catalogo",
    },
    {
      label: "Palas de pádel",
      id: "palas",
    },
    {
      label: "Zapatillas",
      id: "zapatillas",
    },
    {
      label: "Ropa",
      id: "ropa",
    },
    {
      label: "Mochilas",
      id: "mochilas",
    },
    {
      label: "Accesorios",
      id: "accesorios",
    },
  ]

  const irASeccion = (id: string) => {
    setMenuAbierto(false)

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 200)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundColor: "#f4f6f8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <IconButton
        onClick={() => setMenuAbierto(true)}
        sx={{
          position: "fixed",
          top: { xs: 88, md: 100 },
          left: { xs: 16, md: 24 },
          zIndex: 1300,
          width: 52,
          height: 52,
          backgroundColor: "#111827",
          color: "#fff",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.28)",
          "&:hover": {
            backgroundColor: "#16a34a",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={menuAbierto}
        onClose={() => setMenuAbierto(false)}
        PaperProps={{
          sx: {
            width: { xs: 280, sm: 330 },
            backgroundColor: "#0f172a",
            color: "#fff",
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "#86efac",
                  fontWeight: 900,
                  letterSpacing: 3,
                }}
              >
                PADELLAB
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  mt: 0.5,
                }}
              >
                Categorías
              </Typography>
            </Box>

            <IconButton
              onClick={() => setMenuAbierto(false)}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.08)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.16)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "#cbd5e1",
              mb: 3,
              lineHeight: 1.7,
            }}
          >
            Navega rápidamente por las secciones principales de la tienda.
          </Typography>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", mb: 2 }} />

          <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {opcionesMenu.map((opcion) => (
              <ListItemButton
                key={opcion.id}
                onClick={() => irASeccion(opcion.id)}
                sx={{
                  borderRadius: 3,
                  px: 2,
                  py: 1.4,
                  color: "#e5e7eb",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#16a34a",
                    color: "#111827",
                    transform: "translateX(6px)",
                  },
                }}
              >
                <ListItemText
                  primary={opcion.label}
                  primaryTypographyProps={{
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box
            sx={{
              mt: "auto",
              p: 2,
              borderRadius: 4,
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(255,255,255,0.06))",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
              Envío rápido
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
              Equípate con el mejor material de pádel.
            </Typography>
          </Box>
        </Box>
      </Drawer>

      <Box
        sx={{
          width: "100%",
          minHeight: { xs: 520, md: 620 },
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 45%, #16a34a 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          px: { xs: 3, sm: 6, md: 12 },
          py: { xs: 8, md: 10 },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ maxWidth: 850 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 4,
              color: "#86efac",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            PADELLAB STORE
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 950,
              mt: 2,
              mb: 3,
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5.5rem",
              },
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
            }}
          >
            Equípate para dominar la pista
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#e5e7eb",
              maxWidth: 680,
              mb: 4,
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Palas, zapatillas, ropa y accesorios de pádel seleccionados para
            mejorar tu juego.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => irASeccion("catalogo")}
              sx={{
                backgroundColor: "#22c55e",
                color: "#111827",
                fontWeight: 900,
                px: 4,
                py: 1.5,
                borderRadius: 999,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#16a34a",
                },
              }}
            >
              Ver productos
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: 999,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  borderColor: "#86efac",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Ofertas destacadas
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        id="catalogo"
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 7 },
        }}
      >
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

        {!loading && !error && (
          <>
            <Box id="palas">
              <CategorySection
                title="Palas de pádel"
                subtitle="Potencia, control y precisión para cada tipo de jugador."
                products={palas} href={""}              />
            </Box>

            <Box id="zapatillas">
              <CategorySection
                title="Zapatillas de pádel"
                subtitle="Agarre, estabilidad y comodidad para moverte mejor en pista."
                products={zapatillas} href={""}              />
            </Box>

            <Box id="ropa">
              <CategorySection
                title="Ropa de pádel"
                subtitle="Camisetas y pantalones técnicos para entrenar y competir."
                products={ropa} href={""}              />
            </Box>

            <Box id="mochilas">
              <CategorySection
                title="Mochilas"
                subtitle="Transporta tu material de forma cómoda y organizada."
                products={mochilas} href={""}              />
            </Box>

            <Box id="accesorios">
              <CategorySection
                title="Accesorios"
                subtitle="Gorras, muñequeras y complementos para completar tu equipación."
                products={accesorios} href={""}              />
            </Box>

            {productos.length === 0 && (
              <Box sx={{ textAlign: "center", py: 10 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  No hay productos todavía.
                </Typography>
                <Typography sx={{ color: "#6b7280", mt: 1 }}>
                  Revisa que MongoDB tenga datos y que el endpoint /api/catalog
                  esté devolviendo productos.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Box>

      <Footer />
    </Box>
  )
}