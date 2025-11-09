import { IMetrics } from "@/types/metrics.type";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function MetricsCard({ metric }: { metric: IMetrics }) {
  const { color, icon: Icon, label, value } = metric;

  return (
    <Card
      sx={{
        textAlign: "center",
        p: 4,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Box sx={{ color, mb: 2 }}>{<Icon sx={{ fontSize: 48 }} />}</Box>

        <Typography
          variant="h4"
          component="p"
          fontWeight="bold"
          color="primary"
        >
          {value}+
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
