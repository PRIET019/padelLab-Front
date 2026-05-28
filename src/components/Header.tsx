import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#111827",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            PadelLab
          </Typography>

          <Box>
            <Button sx={{ color: "#111827", textTransform: "none" }}>Inicio</Button>
            <Button sx={{ color: "#111827", textTransform: "none" }}>Productos</Button>
            <Button sx={{ color: "#111827", textTransform: "none" }}>Contacto</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

