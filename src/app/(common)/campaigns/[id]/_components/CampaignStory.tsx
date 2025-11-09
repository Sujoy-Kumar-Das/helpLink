import { Box, Card, CardContent, Typography } from "@mui/material";

interface TimelineItem {
  date: string;
  amount: number;
  action: string;
}

interface CampaignStoryType {
  introduction: string;
  problem: string;
  solution: string;
  timeline: TimelineItem[];
}

export default function CampaignStory() {
  const campaignStory: CampaignStoryType = {
    introduction:
      "Our mission is to provide clean water to communities in need across rural Bangladesh.",
    problem:
      "Millions still lack access to safe drinking water, leading to severe health risks.",
    solution:
      "We’re installing solar-powered filtration systems that serve entire villages sustainably.",
    timeline: [
      {
        date: "2025-01-10",
        amount: 5000,
        action: "Initial fundraising started",
      },
      { date: "2025-02-15", amount: 15000, action: "First system installed" },
    ],
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: 4 }}>
        {/* Introduction */}
        <Typography variant="h4" gutterBottom fontWeight={700}>
          The Story
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          {campaignStory.introduction}
        </Typography>

        {/* Problem */}
        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
          The Problem
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          {campaignStory.problem}
        </Typography>

        {/* Solution */}
        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
          Our Solution
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          {campaignStory.solution}
        </Typography>

        {/* Timeline */}
        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
          Progress Timeline
        </Typography>
        <Box sx={{ mt: 2 }}>
          {campaignStory.timeline.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: 3,
                mb: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: "grey.50",
              }}
            >
              <Box sx={{ textAlign: "center", minWidth: 80 }}>
                <Typography variant="h6" fontWeight={700} color="primary">
                  ${item.amount.toLocaleString()}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(item.date).toLocaleDateString()}
                </Typography>
              </Box>
              <Typography variant="body1">{item.action}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
