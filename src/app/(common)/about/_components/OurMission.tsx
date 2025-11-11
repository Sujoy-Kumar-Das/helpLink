import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Grid } from "@mui/material";
import OurLeftMission from "./OurLeftMission";
import OurRightMission from "./OurRightMission";

export default function OurMission() {
  return (
    <CommonContainer>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <OurLeftMission />
        </Grid>
        <Grid item xs={12} md={6}>
          <OurRightMission />
        </Grid>
      </Grid>
    </CommonContainer>
  );
}
