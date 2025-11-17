import { Box } from "@mui/material";
import Image from "next/image";

export default function OurLeftMission() {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", md: 500 },
        height: { xs: 300, md: 500 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        src="/about/mission-image.jpg"
        alt="Mission"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
