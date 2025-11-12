import {
  TrackChanges,
  TrendingUp,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

const stats = [
  {
    id: 1,
    icon: <TrendingUp sx={{ fontSize: 48, color: "secondary.main", mb: 2 }} />,
    value: "$250K+",
    label: "Funds Raised",
  },
  {
    id: 2,
    icon: (
      <VolunteerActivism
        sx={{ fontSize: 48, color: "secondary.main", mb: 2 }}
      />
    ),
    value: "5,000+",
    label: "Volunteers",
  },
];

export default function RightHeroSection() {
  return (
    <Paper
      sx={{
        p: 4,
        backgroundColor: "background.default",
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        border: "1px solid var(--gradient)",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "primary.main",
          textAlign: "center",
          mb: 3,
        }}
      >
        Live Impact Stats
      </Typography>

      <Grid container spacing={3}>
        {stats.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Box sx={{ textAlign: "center" }}>
              {item.icon}
              <Typography variant="h4" color={"primary.main"} sx={{ mb: 1 }}>
                {item.value}
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          background: "var(--gradient)",
        }}
      >
        <TrackChanges sx={{ color: "primary.main" }} />
        <Typography
          variant="body2"
          color="primary.main"
          sx={{ fontWeight: 600 }}
        >
          Helping 50+ communities worldwide
        </Typography>
      </Box>
    </Paper>
  );
}
