import { EmojiEvents, Groups, Public } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

const features = [
  {
    icon: <Groups sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />,
    title: "Join a Team",
    description:
      "Work with like-minded individuals passionate about making a difference",
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />,
    title: "Make an Impact",
    description:
      "See the direct results of your efforts in communities worldwide",
  },
  {
    icon: <Public sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />,
    title: "Global Reach",
    description: "Opportunities available locally and internationally",
  },
];

export default function VolunteerFeature() {
  return (
    <Grid container spacing={4} sx={{ mb: 6 }}>
      {features.map((item, index) => (
        <Grid
          item
          xs={12}
          md={4}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            transition: "all 0.4s ease",
            "&:hover": {
              transform: "translateY(-8px) scale(1.03)",
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              color: "primary.contrastText",
              p: 4,
              borderRadius: 4,
              transition: "all 0.4s ease",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              "&:hover": {
                border: "1px solid",
                borderColor: "secondary.light",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255,255,255,0.03)",
              },
            }}
          >
            <Box
              sx={{
                transition: "transform 0.4s ease",
                "&:hover": { transform: "rotate(6deg) scale(1.1)" },
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="h5"
              color="text.primary"
              gutterBottom
              sx={{ mt: 1 }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ opacity: 0.8 }}
            >
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
