import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: 4,
        padding: 2,
        borderTop: "1px solid #ddd",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Typography align="center" variant="body2">
          © 2026 PadelLab
        </Typography>
      </Container>
    </Box>
  );
}

