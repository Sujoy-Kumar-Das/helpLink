import PageHeader from "@/components/shared/commonHeader/PageHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box } from "@mui/material";
import CampaignDetailed from "./_components/CampaignDetailed";
import CampaignDetailHeader from "./_components/CampaignDetailHeader";

const campaignData = {
  id: "1",
  slug: "sylhet-flood-relief",
  title: "Sylhet Flood Relief",
  category: "Disaster Relief",
  tags: ["Urgent", "Emergency", "Food", "Shelter"],
  status: "urgent",
  location: "Sylhet, Bangladesh",
  goal: 50000,
  raised: 37450,
  donors: 428,
  daysLeft: 12,
  organizer: {
    name: "Bangladesh Red Crescent",
    avatar: "/images/org-red-crescent.jpg",
    verified: true,
  },
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjQkIyTH5fTxU7yP7hbuzAOWNV4ANaGBTUg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjQkIyTH5fTxU7yP7hbuzAOWNV4ANaGBTUg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjQkIyTH5fTxU7yP7hbuzAOWNV4ANaGBTUg&s",
  ],
  impact: "1,200 families supported with essential supplies",
};

export default async function CampaignDetailPage() {
  return (
    <Box component="section">
      <PageHeader title={campaignData.title} subtitle={campaignData.impact} />

      <CommonContainer sx={{ py: 4 }}>
        <CampaignDetailHeader />
        <CampaignDetailed />
      </CommonContainer>
    </Box>
  );
}
