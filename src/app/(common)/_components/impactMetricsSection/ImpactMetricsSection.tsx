import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import MetricsList from "./MetricsList";

export default function ImpactMetricsSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Our Impact"
        subtitle="Making a real difference in communities worldwide"
      />

      <MetricsList />
    </CommonContainer>
  );
}
