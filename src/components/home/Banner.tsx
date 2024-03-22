import { Box } from "@mui/material";
import bannerImage from "../../assets/BANNER].avif";
import HomeCard from "./HomeCard";

export default function Banner() {
  return (
    <Box
      sx={{
        background: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomeCard />
    </Box>
  );
}
