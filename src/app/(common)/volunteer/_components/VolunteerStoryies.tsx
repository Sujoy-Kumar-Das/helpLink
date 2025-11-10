import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { LocationOn } from "@mui/icons-material";
import { Avatar, Box, Card, Chip, Grid, Typography } from "@mui/material";

const volunteerStories = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Field Support",
    avatar: "/avatars/sarah.jpg",
    quote:
      "Helping distribute supplies to remote communities showed me the real impact of our work. Every smile makes it worth it.",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Fundraising",
    avatar: "/avatars/marcus.jpg",
    quote:
      "Organizing our annual charity run brought our community together and raised over $50,000 for clean water projects.",
    location: "Chicago, IL",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Social Media",
    avatar: "/avatars/elena.jpg",
    quote:
      "Using social media to share stories of impact has helped us reach thousands of new supporters and volunteers.",
    location: "Miami, FL",
  },
];

export default function VolunteerStories() {
  return (
    <CommonContainer sx={{ py: 8, bgcolor: "background.paper" }}>
      <CommonHeader
        title="Volunteer Stories"
        subtitle="Hear from our amazing volunteers making a difference"
      />

      <Grid container spacing={4}>
        {volunteerStories.map((volunteer) => (
          <Grid item xs={12} md={4} key={volunteer.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                p: 4,
              }}
            >
              <Avatar
                src={volunteer.avatar}
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 3,
                  border: "4px solid",
                  borderColor: "primary.main",
                }}
              />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {volunteer.name}
              </Typography>
              <Chip
                label={volunteer.role}
                size="small"
                sx={{ mb: 2, bgcolor: "primary.main", color: "white" }}
              />
              <Typography
                color="text.secondary"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  flexGrow: 1,
                }}
              >
                "{volunteer.quote}"
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOn
                  sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {volunteer.location}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
