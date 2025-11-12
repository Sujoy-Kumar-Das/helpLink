import { Button, Grid, Typography } from "@mui/material";
import AboutMissionCardList from "./AboutMissionCardList";

export default function AboutRightSection() {
  return (
    <Grid item xs={12} md={7}>
      <Typography variant="h2" component="h2" gutterBottom color="primary.main">
        Our Mission
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ mb: 2, color: "text.secondary" }}
      >
        At HopeLink, we believe in the power of community and compassion to
        create lasting change. Our mission is to bridge the gap between those
        who want to help and those who need support.
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ mb: 4, color: "text.secondary" }}
      >
        Through transparent operations, strategic partnerships, and the
        dedication of our volunteers, we've impacted millions of lives across
        50+ countries. Every donation, every hour volunteered, creates a ripple
        effect of hope.
      </Typography>

      <AboutMissionCardList />

      <Button variant="contained" size="medium" color="primary">
        Learn More About Us
      </Button>
    </Grid>
  );
}
