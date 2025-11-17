import { Box, Button, Container, Typography } from "@mui/material";
export default function RegisterEvent() {
  return (
    <Box
      sx={{
        background: "var(--gradient)",
        color: "text.primary",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom color="text.primary">
          Every small action counts.
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }} color="text.primary">
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
