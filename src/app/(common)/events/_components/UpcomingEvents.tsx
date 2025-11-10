import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import {
  AccessTime,
  CalendarToday,
  LocationOn,
  People,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
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

export default function UpcomingEvents() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="lg">
        <CommonHeader
          title="Upcoming Events"
          subtitle="Discover opportunities to connect, learn, and make a difference in
          your community"
        />

        <Grid container spacing={4}>
          {upcomingEvents.map((event) => (
            <Grid item xs={12} md={6} lg={4} key={event.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    background: `url(${event.image}) center/cover`,
                    position: "relative",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Chip
                      label={event.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {event.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {event.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <CalendarToday
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          color: "text.secondary",
                        }}
                      />
                      <Typography variant="body2">
                        {new Date(event.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <AccessTime
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          color: "text.secondary",
                        }}
                      />
                      <Typography variant="body2">{event.time}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOn
                        sx={{
                          fontSize: 16,
                          mr: 1,
                          color: "text.secondary",
                        }}
                      />
                      <Typography variant="body2">{event.location}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mb: 2,
                      flexWrap: "wrap",
                    }}
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
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Button variant="contained" fullWidth color="primary">
                      Join Now
                    </Button>
                    <Chip
                      icon={<People />}
                      label={event.attendees}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
