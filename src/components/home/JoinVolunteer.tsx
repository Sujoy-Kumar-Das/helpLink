import { Box, Button, Container, Typography } from "@mui/material";

export default function JoinVolunteer() {
  return (
    <Container
      component={"section"}
      sx={{ backgroundColor: "primary.main", py: 12, mt: 10 }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1200"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            color={"text.primary"}
            sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Lets Change The World
          </Typography>
          <Typography
            color={"text.primary"}
            sx={{ fontSize: { xs: "1rem", md: "2rem" } }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            With Humanity
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ boxShadow: "none", color: "text.primary" }}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Join As A Volunteer
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
