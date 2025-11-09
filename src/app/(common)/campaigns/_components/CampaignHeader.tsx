import SortQuery from "@/components/queryCompo/Sort";
import { Box, Typography } from "@mui/material";
import { campaignQuery } from "./camaigns.query.constant";
export default function CampaignHeader() {
  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        p: 3,
        borderRadius: 3,
      }}
    >
      {/* Results Count */}
      <Box>
        <Typography variant="h6" fontWeight={700} color="primary">
          {20} Campaigns
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Making a difference worldwide
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Sort Dropdown */}
        <SortQuery title="Sort" queryOptions={campaignQuery.sortOptions} />
      </Box>
    </Box>
  );
}
