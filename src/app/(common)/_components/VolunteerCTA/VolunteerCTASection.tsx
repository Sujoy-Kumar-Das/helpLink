import { EmojiEvents, Groups, Public } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function VolunteerCTA() {
  return (
    <Box
      sx={{
        py: 12,
        background:
          "linear-gradient(135deg, rgba(25, 118, 210, 0.9), rgba(255, 152, 0, 0.9))",
        color: "white",
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/volunteer-bg.jpg") center/cover',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Join Our Volunteer Community
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 6, opacity: 0.9, maxWidth: "600px", mx: "auto" }}
        >
          Make a hands-on difference in communities around the world. Your time
          and skills can change lives.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Groups sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
              <Typography variant="h5" gutterBottom>
                Join a Team
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Work with like-minded individuals passionate about making a
                difference
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <EmojiEvents sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
              <Typography variant="h5" gutterBottom>
                Make an Impact
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                See the direct results of your efforts in communities worldwide
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Public sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
              <Typography variant="h5" gutterBottom>
                Global Reach
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Opportunities available locally and internationally
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                bgcolor: "grey.100",
                transform: "translateY(-2px)",
              },
            }}
          >
            Become a Volunteer
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "white",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                borderColor: "white",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
