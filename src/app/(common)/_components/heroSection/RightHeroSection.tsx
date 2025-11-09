import { TrendingUp, VolunteerActivism } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function RightHeroSection() {
  return (
    <Paper
      sx={{
        p: 4,
        background: "rgba(255,255,255,0.95)",
        color: "#212121",
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "#1976D2",
          fontWeight: 600,
          textAlign: "center",
          mb: 3,
        }}
      >
        Live Impact Stats
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "center" }}>
            <TrendingUp
              sx={{
                fontSize: 48,
                color: "#4CAF50",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#1976D2"
              sx={{ mb: 1 }}
            >
              $250K+
            </Typography>
            <Typography
              variant="body2"
              color="#555555"
              sx={{ fontWeight: 500 }}
            >
              Funds Raised
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "center" }}>
            <VolunteerActivism
              sx={{
                fontSize: 48,
                color: "#FF9800",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#1976D2"
              sx={{ mb: 1 }}
            >
              5,000+
            </Typography>
            <Typography
              variant="body2"
              color="#555555"
              sx={{ fontWeight: 500 }}
            >
              Volunteers
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Progress indicator */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 2,
          background:
            "linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(255, 152, 0, 0.1))",
          border: "1px solid rgba(25, 118, 210, 0.2)",
        }}
      >
        <Typography
          variant="body2"
          color="#1976D2"
          textAlign="center"
          sx={{ fontWeight: 600 }}
        >
          🎯 Helping 50+ communities worldwide
        </Typography>
      </Box>
    </Paper>
  );
}
