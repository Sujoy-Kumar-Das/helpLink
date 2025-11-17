import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import ImpactMetricsList from "../../_components/impactMetricsSection/MetricsList";
import { Box } from "@mui/material";

export default function OurImpact() {
  return (
    <Box>
      <CommonHeader
        title="Our Impact in Numbers"
        subtitle="Real change measured in lives transformed and communities
              empowered"
      />

      <ImpactMetricsList />
    </Box>
  );
}
