import { Box, Typography } from "@mui/material";

export default function GalleryInfo() {
  return (
    <Box
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      component={"div"}
      sx={{ width: { xs: "100%", md: "50%" } }}
    >
      <Box component={"div"}>
        <Typography
          component={"h1"}
          variant="h3"
          sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
          color={"text.primary"}
        >
          People Helping People
        </Typography>
        <Typography
          component={"p"}
          variant="body1"
          my={2}
          color={"text.secondary"}
        >
          Discover our 'People Helping People' gallery, a collection of
          uplifting images showcasing kindness and unity. Each photo captures
          the essence of compassion and community, highlighting the positive
          impact of helping others. Explore these heartfelt moments that remind
          us of the power of empathy and solidarity in making the world a better
          place.{" "}
        </Typography>
      </Box>
    </Box>
  );
}
