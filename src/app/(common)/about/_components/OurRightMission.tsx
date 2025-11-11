import { Box, Typography } from "@mui/material";

export default function OurRightMission() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom color={"primary.main"}>
        Our Mission
      </Typography>
      <Typography variant="h4" sx={{ mb: 3, color: "text.primary" }}>
        Building a world where every person has access to opportunity and
        dignity
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
        }}
      >
        At HopeLink, we believe that sustainable change begins with addressing
        root causes. We work hand-in-hand with local communities to develop
        solutions that tackle poverty, improve access to quality education and
        healthcare, and create economic opportunities that last for generations.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontStyle: "italic",
        }}
      >
        Our approach combines immediate relief with long-term development,
        ensuring that every intervention creates pathways to self-sufficiency
        and hope.
      </Typography>
    </Box>
  );
}
