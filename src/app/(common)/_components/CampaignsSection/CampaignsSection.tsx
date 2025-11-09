import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Communities",
    image: "/campaigns/clean-water.jpg",
    raised: 45000,
    goal: 75000,
    description:
      "Providing access to clean drinking water in underserved areas across Africa.",
    donors: 1240,
  },
  {
    id: 2,
    title: "Education for All Children",
    image: "/campaigns/education.jpg",
    raised: 120000,
    goal: 200000,
    description:
      "Building schools and providing educational materials for underprivileged children.",
    donors: 2560,
  },
  {
    id: 3,
    title: "Emergency Relief Fund",
    image: "/campaigns/emergency-relief.jpg",
    raised: 85000,
    goal: 150000,
    description:
      "Supporting communities affected by natural disasters and conflicts.",
    donors: 1890,
  },
];

export default function CampaignsSection() {
  return (
    <CommonContainer sx={{ bgcolor: "background.paper" }}>
      <CommonHeader
        title="Ongoing Campaigns"
        subtitle="Join us in supporting these critical initiatives"
      />

      <Grid container spacing={4}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} md={4} key={campaign.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={campaign.image}
                alt={campaign.title}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {campaign.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {campaign.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Raised: ${campaign.raised.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Goal: ${campaign.goal.toLocaleString()}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(campaign.raised / campaign.goal) * 100}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  🤝 {campaign.donors.toLocaleString()} donors
                </Typography>

                <Button variant="contained" fullWidth size="large">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="outlined" size="large">
          View All Campaigns
        </Button>
      </Box>
    </CommonContainer>
  );
}
