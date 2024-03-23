import { Card, Grid, Typography } from "@mui/material";

export default function DashboardDonationCard({ data }) {
  return (
    <Grid item xs={6} md={3}>
      <Card
        sx={{
          px: 2,
          py: 1,
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          fontSize={{ xs: "1rem", md: "1.5rem" }}
          color="text.primary"
          textAlign={"left"}
        >
          {data.title}
        </Typography>
        <Typography
          pt={2}
          variant="h5"
          color="text.secondary"
          textAlign={"left"}
        >
          {data.value}
        </Typography>
      </Card>
    </Grid>
  );
}
