import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box, Card, Grid, Typography } from "@mui/material";

const pastEvents = [
  {
    id: 7,
    title: "Summer Food Drive 2024",
    description:
      "Successfully collected over 2,000 pounds of food for local shelters and families in need.",
    date: "2024-08-15",
    time: "10:00 - 16:00",
    location: "Various Drop-off Locations",
    image: "/events/food-drive.jpg",
    category: "Community",
    tags: ["Completed", "Successful"],
    attendees: 200,
  },
  {
    id: 8,
    title: "Back-to-School Supplies Distribution",
    description:
      "Distributed school supplies to 500+ students from low-income families.",
    date: "2024-08-25",
    time: "09:00 - 15:00",
    location: "Elementary School Gym",
    image: "/events/school-supplies.jpg",
    category: "Education",
    tags: ["Completed", "Successful"],
    attendees: 150,
  },
];
export default function CompletedEvents() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Completed Events"
        subtitle="See the impact we've made together and hear from our community"
      />

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {pastEvents.map((event) => (
          <Grid item xs={12} md={6} key={event.id}>
            <Card sx={{ p: 3, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    background: `url(${event.image}) center/cover`,
                    mr: 3,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    color="text.primary"
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(event.date).toLocaleDateString()} •{" "}
                    {event.attendees} participants
                  </Typography>
                </Box>
              </Box>
              <Typography color="text.secondary" fontStyle="italic">
                {event.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
