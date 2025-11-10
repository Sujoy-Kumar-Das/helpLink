import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Dr. James Wilson",
    role: "Medical Volunteer",
    text: "The training and support provided to volunteers is exceptional. I feel valued and empowered to make a difference.",
    avatar: "/avatars/james.jpg",
  },
  {
    name: "Priya Patel",
    role: "Education Coordinator",
    text: "Seeing children light up when they receive school supplies is priceless. This organization truly changes lives.",
    avatar: "/avatars/priya.jpg",
  },
  {
    name: "David Kim",
    role: "Logistics Manager",
    text: "Efficient operations and transparent processes make volunteering here both rewarding and impactful.",
    avatar: "/avatars/david.jpg",
  },
];

export default function VolunteerTestimonials() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        What Volunteers Say
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 4, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                <Box>
                  <Typography fontWeight={600}>{testimonial.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
              <Typography color="text.secondary" fontStyle="italic">
                "{testimonial.text}"
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
