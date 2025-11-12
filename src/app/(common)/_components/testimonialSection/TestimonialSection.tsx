import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Donor",
    avatar: "/avatars/sarah.jpg",
    content:
      "Seeing the direct impact of my donations through HopeLink's transparent reporting gives me confidence that my contributions are making a real difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Volunteer",
    avatar: "/avatars/michael.jpg",
    content:
      "Volunteering with HopeLink has been life-changing. The organization truly cares about both the communities they serve and their volunteers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Corporate Partner",
    avatar: "/avatars/emily.jpg",
    content:
      "Partnering with HopeLink has allowed our company to make a meaningful impact. Their professionalism and dedication are exceptional.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <CommonContainer sx={{ bgcolor: "background.paper" }}>
      <CommonHeader
        title="What People Say"
        subtitle="Hear from our donors, volunteers, and partners"
      />

      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial.id}>
            <Card
              sx={{
                height: "100%",
                p: 3,
                bgcolor: "background.default",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {"⭐".repeat(testimonial.rating)}
                </Box>

                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", color: "text.secondary", mb: 3 }}
                >
                  "{testimonial.content}"
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <Image
                    src={testimonial.avatar}
                    alt="Reviewer image"
                    height={56}
                    width={56}
                    style={{ borderRadius: "50%" }}
                  />

                  <Box>
                    <Typography variant="h6" component="div">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
