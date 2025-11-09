import aboutImage from "@/assets/about.webp";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function AboutLeftSection() {
  return (
    <Grid item xs={12} md={5}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image
          src={aboutImage}
          alt="Our Mission"
          width={800}
          height={800}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </Box>
    </Grid>
  );
}
