import { Grid } from "@mui/material";
import OurLeftMission from "./OurLeftMission";
import OurRightMission from "./OurRightMission";

export default function OurMission() {
  return (
    <Grid container gap={6}>
      <Grid item xs={12} md={6}>
        <OurLeftMission />
      </Grid>
      <Grid item xs={12} md={6}>
        <OurRightMission />
      </Grid>
    </Grid>
  );
}
