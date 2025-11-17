import { Grid } from "@mui/material";
import metrics from "./metrics.constant";
import MetricsCard from "./MetricsCard";

export default function ImpactMetricsList() {
  return (
    <Grid container spacing={4}>
      {metrics.map((metric) => (
        <Grid item xs={12} sm={6} md={3} key={metric.id}>
          <MetricsCard metric={metric} />
        </Grid>
      ))}
    </Grid>
  );
}
