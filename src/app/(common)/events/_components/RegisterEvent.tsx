import { Box, Button, Container, Typography } from "@mui/material";
export default function RegisterEvent() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, rgba(25, 118, 210, 0.9), rgba(255, 152, 0, 0.9))",
        color: "white",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Every small action counts.
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Be part of the next event that changes lives.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
          }}
        >
          View All Upcoming Events
        </Button>
      </Container>
    </Box>
  );
}
