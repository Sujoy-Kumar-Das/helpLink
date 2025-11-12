import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Grid } from "@mui/material";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

export default function HeroSection() {
  return (
    <CommonContainer
      sx={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient)",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <LeftHeroSection />
        </Grid>

        <Grid item xs={12} md={5}>
          <RightHeroSection />
        </Grid>
      </Grid>
    </CommonContainer>
  );
}
