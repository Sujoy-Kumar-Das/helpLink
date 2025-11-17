import {
  AttachMoney,
  LocationCity,
  People,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const stats = [
  {
    label: "Volunteers",
    value: "50K+",
    color: "primary.main",
    icon: People,
  },
  {
    label: "Donations",
    value: "$10M+",
    color: "secondary.main",
    icon: AttachMoney,
  },
  {
    label: "Communities",
    value: "100+",
    color: "success.main",
    icon: LocationCity,
  },
];

const LoginLeftSection = () => (
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
    }}
  >
    <Box sx={{ position: "relative", zIndex: 1, mb: 4 }}>
      <VolunteerActivism sx={{ fontSize: 80, mb: 2, color: "primary.main" }} />
    </Box>

    <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 2 }}>
      HopeLink
    </Typography>
    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ mb: 3, maxWidth: 400 }}
    >
      Connecting Compassion with Purpose
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
      Join thousands of volunteers and donors making a difference in communities
      worldwide. Your journey of impact starts here.
    </Typography>

    <Box sx={{ display: "flex", gap: 4, mt: 4 }}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Box key={stat.label} sx={{ textAlign: "center" }}>
            <Icon sx={{ fontSize: 40, color: stat.color }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: stat.color }}
            >
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  </Box>
);

export default LoginLeftSection;
