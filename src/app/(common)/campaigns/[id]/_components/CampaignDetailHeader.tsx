import { Grid } from "@mui/material";
import CampaignSlider from "./CampaignSlider";
import ProgressSection from "./ProgressSection";

export default function CampaignDetailHeader() {
  const campaignData = {
    images: [
      "/images/campaign1.jpg",
      "/images/campaign2.jpg",
      "/images/campaign3.jpg",
    ],
    goal: 50000,
    raised: 27500,
    donors: 420,
    daysLeft: 15,
    organizer: {
      name: "Hope Foundation",
      isVerified: true,
      image: "/images/organizer-avatar.jpg",
    },
  };

  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      {/* Left Side image slider */}
      <Grid item xs={12} md={8}>
        <CampaignSlider images={campaignData.images} />
      </Grid>

      {/* Right Side progress info */}
      <Grid item xs={12} md={4}>
        <ProgressSection
          daysLeft={campaignData.daysLeft}
          donors={campaignData.donors}
          goal={campaignData.goal}
          raised={campaignData.raised}
          organizer={campaignData.organizer}
        />
      </Grid>
    </Grid>
  );
}
