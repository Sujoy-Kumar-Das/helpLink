import { Receipt } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function CampaignUpdate() {
  const updates = [
    {
      id: 1,
      title: "First Milestone Achieved",
      date: "2025-03-01",
      content:
        "We’re thrilled to announce that the first water filtration unit is operational!",
    },
  ];
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={700}>
          Updates
        </Typography>

        {updates.map((update) => (
          <Box
            key={update.id}
            sx={{
              mb: 4,
              pb: 3,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="h6" gutterBottom fontWeight={600}>
              {update.title}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              {new Date(update.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" paragraph>
              {update.content}
            </Typography>
            <Button startIcon={<Receipt />} variant="outlined" size="small">
              View Receipts
            </Button>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
