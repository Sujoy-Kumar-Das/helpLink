import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Grid } from "@mui/material";
import AboutLeftSection from "./AboutLeftSection";
import AboutRightSection from "./AboutRightSection";

export default function AboutSection() {
  return (
    <CommonContainer sx={{ bgcolor: "background.paper" }}>
      <Grid container spacing={20} alignItems="center">
        <AboutLeftSection />
        <AboutRightSection />
      </Grid>
    </CommonContainer>
  );
}
