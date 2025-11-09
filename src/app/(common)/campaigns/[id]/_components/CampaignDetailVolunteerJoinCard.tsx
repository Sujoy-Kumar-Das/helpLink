import { VolunteerActivism } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function CampaignDetailVolunteerJoinCard() {
  return (
    <Card>
      <CardContent sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom fontWeight={700}>
          Want to Help?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Join our volunteer team and make a hands-on difference
        </Typography>
        <Button variant="outlined" fullWidth startIcon={<VolunteerActivism />}>
          Volunteer Sign Up
        </Button>
      </CardContent>
    </Card>
  );
}
