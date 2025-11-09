import { Grid } from "@mui/material";
import CampaignDetailVolunteerJoinCard from "./CampaignDetailVolunteerJoinCard";
import CampaignInfo from "./CampaignInfo";
import CampaignDetailRecentDonor from "./CampaingnDetailRecentDonor";
import CampignTabs from "./CampignTabs";

export default function CampaignDetailed() {
  return (
    <Grid container spacing={4}>
      {/* Left Column */}
      <Grid item xs={12} lg={8}>
        {/* Table of Contents */}
        <CampignTabs />
      </Grid>

      {/* Right Sidebar */}
      <Grid item xs={12} lg={4}>
        {/* Campaign info */}

        <CampaignInfo />

        {/* Recent Donors */}
        <CampaignDetailRecentDonor />

        {/* Volunteer Signup */}
        <CampaignDetailVolunteerJoinCard />
      </Grid>
    </Grid>
  );
}
