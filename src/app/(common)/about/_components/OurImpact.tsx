import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import ImpactMetricsList from "../../_components/impactMetricsSection/MetricsList";

export default function OurImpact() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Our Impact in Numbers"
        subtitle="Real change measured in lives transformed and communities
              empowered"
      />

      <ImpactMetricsList />
    </CommonContainer>
  );
}
