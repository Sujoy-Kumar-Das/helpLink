import PageHeader from "@/components/shared/commonHeader/PageHeader";
import { Box, Button } from "@mui/material";

export default function VolunteerHeader() {
  return (
    <PageHeader
      title="Join Our Mission — Become a Volunteer"
      subtitle="Your time and effort can change lives. Join our growing community of
            changemakers making a real difference every day."
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 5,
        }}
      >
        <Button variant="contained" size="large" color="secondary">
          Join as Volunteer
        </Button>
        <Button variant="contained" size="large" color="info">
          View Upcoming Events
        </Button>
      </Box>
    </PageHeader>
  );
}
