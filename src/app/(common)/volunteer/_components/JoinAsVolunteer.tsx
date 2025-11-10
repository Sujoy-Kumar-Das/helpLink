import { Box, Button, Container, Typography } from "@mui/material";

export default function JoinAsVolunteer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1E6DC6 0%, #2E8B57 100%)",
        color: "white",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Together, we can bring hope to every community.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Join thousands of volunteers making a lasting impact
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            fontSize: "1.1rem",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              background: "rgba(255,255,255,0.3)",
            },
          }}
        >
          Join Now
        </Button>
      </Container>
    </Box>
  );
}
