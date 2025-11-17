import CommonContainer from "@/components/shared/contaners/CommonContainer";
import {
  AccessTime,
  CalendarToday,
  LocationOn,
  People,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Charity Gala Dinner",
    description:
      "Join us for an elegant evening of fine dining, live music, and fundraising to support local education initiatives.",
    date: "2024-12-15",
    time: "19:00 - 23:00",
    location: "Grand Ballroom, Downtown Conference Center",
    image: "/events/gala-dinner.jpg",
    category: "Fundraising",
    tags: ["Formal", "Dinner", "Live Music"],
    attendees: 250,
    featured: true,
  },
  {
    id: 2,
    title: "Community Clean-Up Day",
    description:
      "Help us beautify our local parks and neighborhoods. All supplies provided. Families welcome!",
    date: "2024-11-25",
    time: "09:00 - 13:00",
    location: "Central Park & Surrounding Areas",
    image: "/events/cleanup.jpg",
    category: "Community",
    tags: ["Outdoor", "Family Friendly", "Free"],
    attendees: 120,
  },
  {
    id: 3,
    title: "Health & Wellness Workshop",
    description:
      "Learn about mental health awareness, nutrition, and fitness from certified professionals.",
    date: "2024-12-05",
    time: "14:00 - 17:00",
    location: "Community Health Center",
    image: "/events/wellness.jpg",
    category: "Health",
    tags: ["Workshop", "Educational", "Free"],
    attendees: 80,
  },
  {
    id: 4,
    title: "Education Fundraiser Run",
    description:
      "5K run/walk to raise funds for school supplies and educational programs in underserved communities.",
    date: "2024-11-30",
    time: "08:00 - 12:00",
    location: "Riverside Park Trail",
    image: "/events/5k-run.jpg",
    category: "Fundraising",
    tags: ["5K", "Fitness", "Family Friendly"],
    attendees: 300,
  },
  {
    id: 5,
    title: "Climate Change Awareness Rally",
    description:
      "Join the movement for environmental protection and learn how you can make a difference.",
    date: "2024-12-10",
    time: "15:00 - 18:00",
    location: "City Hall Plaza",
    image: "/events/climate-rally.jpg",
    category: "Awareness",
    tags: ["Rally", "Educational", "Free"],
    attendees: 500,
  },
  {
    id: 6,
    title: "After-School Tutoring Program",
    description:
      "Volunteer to help students with homework and provide academic support in various subjects.",
    date: "2024-11-28",
    time: "16:00 - 18:00",
    location: "Local Community Center",
    image: "/events/tutoring.jpg",
    category: "Education",
    tags: ["Volunteering", "Educational", "Weekly"],
    attendees: 45,
  },
];

export default function Events() {
  return (
    <CommonContainer sx={{ bgcolor: "background.primary" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {upcomingEvents.map((event) => (
          <Card
            sx={{
              backgroundColor: "background.default",
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: { xs: 300, md: 400 },
                    background: `url(${event.image}) center/cover`,
                    position: "relative",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chip
                    label="Featured Event"
                    color="primary"
                    sx={{ mb: 2, alignSelf: "flex-start", fontWeight: 600 }}
                  />

                  <Typography
                    variant="h3"
                    gutterBottom
                    fontWeight={700}
                    color={"text.primary"}
                  >
                    {event.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {event.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <CalendarToday sx={{ color: "primary.main" }} />
                    <Typography fontWeight={600} color={"text.secondary"}>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <AccessTime sx={{ color: "primary.main" }} />
                    <Typography color={"text.secondary"}>
                      {event.time}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    <LocationOn sx={{ color: "primary.main" }} />
                    <Typography color={"text.secondary"}>
                      {event.location}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}
                  >
                    {event.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "primary.main",
                          color: "primary.main",
                        }}
                      />
                    ))}
                  </Box>

                  <Box
                    sx={{
                      mt: "auto",
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      sx={{
                        flex: 1,
                        py: 1.5,
                      }}
                    >
                      Register Now
                    </Button>
                    <Chip
                      icon={<People />}
                      label={`${event.attendees} attending`}
                      variant="outlined"
                    />
                  </Box>

                  <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      fontWeight={600}
                    >
                      Starts in days
                    </Typography>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </CommonContainer>
  );
}
