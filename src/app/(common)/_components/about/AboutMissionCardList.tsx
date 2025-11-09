import { Card, CardContent, Grid, Typography } from "@mui/material";
import { aboutMission } from "./about.constants";

export default function AboutMissionCardList() {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {aboutMission.map(({ color, description, icon: Icon, title }, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ textAlign: "center" }}>
            <CardContent>
              {<Icon sx={{ fontSize: 48, color }} />}
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
