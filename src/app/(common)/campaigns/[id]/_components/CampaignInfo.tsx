import { Groups, LocationOn, Schedule } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function CampaignInfo() {
  const campaignData = {
    location: "Rangpur, Bangladesh",
    daysLeft: 18,
    donors: 245,
  };

  const { location, daysLeft, donors } = campaignData;

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          Campaign Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LocationOn color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Location
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {location}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Schedule color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Days Remaining
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {daysLeft} days
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Groups color="primary" />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Donors
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {donors.toLocaleString()} people
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
