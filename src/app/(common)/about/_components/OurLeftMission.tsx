import { Box } from "@mui/material";

export default function OurLeftMission() {
  return (
    <Box
      sx={{
        height: { xs: 300, md: 500 },
        borderRadius: 4,
        background: 'url("/about/mission-image.jpg") center/cover',
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}
