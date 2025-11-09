import { Box, Container, Grid } from "@mui/material";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #1976D2 0%, #FF9800 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <LeftHeroSection />
            </Grid>

            <Grid item xs={12} md={5}>
              <RightHeroSection />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
