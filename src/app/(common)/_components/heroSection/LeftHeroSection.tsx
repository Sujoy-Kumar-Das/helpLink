import { Box, Button, Typography } from "@mui/material";

export default function LeftHeroSection() {
  return (
    <Box>
      <Typography
        variant={"h1"}
        component={"h1"}
        sx={{
          mb: 3,
          color: "primary.contrastText",
        }}
      >
        Together, We Create Hope.
      </Typography>

      <Typography
        variant="h6"
        component={"p"}
        sx={{
          mb: 4,
          opacity: 0.9,
          fontWeight: 300,
          maxWidth: "600px",
          color: "primary.contrastText",
        }}
      >
        Empowering communities through compassion and action. Join us in making
        a lasting difference in the lives of those who need it most.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained" size="large">
          Donate Now
        </Button>

        <Button
          variant="outlined"
          size="large"
          color="secondary"
          sx={{
            fontWeight: 600,
            transition: "all 0.3s ease",
          }}
        >
          Become a Volunteer
        </Button>
      </Box>
    </Box>
  );
}
