import {
  Assignment,
  Group,
  Person,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const features = [
  {
    icon: Person,
    color: "primary.main",
    text: "Personalized volunteer opportunities",
  },
  {
    icon: Assignment,
    color: "secondary.main",
    text: "Track your impact and donations",
  },
  {
    icon: Group,
    color: "success.main",
    text: "Connect with like-minded people",
  },
];

export default function LeftRegisterSection() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, mb: 3 }}>
        <VolunteerActivism
          sx={{ fontSize: 80, mb: 2, color: "primary.main" }}
        />
      </Box>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ mb: 2 }}
        color={"text.primary"}
      >
        Join HopeLink
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 3, maxWidth: 400 }}
        color={"text.secondary"}
      >
        Become Part of Something Bigger
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", maxWidth: 400, mb: 4 }}
      >
        Create your account and start making a meaningful impact in communities
        around the world.
      </Typography>

      <Box sx={{ textAlign: "left", maxWidth: 400 }}>
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <Icon sx={{ color: item.color, mr: 2 }} />
              <Typography variant="body2" color={"text.secondary"}>
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
