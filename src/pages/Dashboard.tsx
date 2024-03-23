import { Box, Container, Grid } from "@mui/material";
import Loader from "../components/Loader";
import DashboardDonationCard from "../components/dashboard/DashboardDonationCard";
import LineChartCompo from "../components/dashboard/LineChartCompo";
import PieChartCompo from "../components/dashboard/PieChartCompo";
import { useGetAllDashboardDonationQuery } from "../redux/features/allDonations/dashboardDonation.api";
import { TDonationItem } from "../types";

export default function Dashboard() {
  const { data, isLoading } = useGetAllDashboardDonationQuery(undefined);

  const pieData = data?.data?.map((item: TDonationItem) => ({
    name: item.title,
    value: Number(item.amount),
  }));

  const LineData = data?.categoryTotals?.map((item) => ({
    name: item.title,
    Total: Number(item.value),
  }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        width: "100%",
      }}
    >
      <Box width={"100%"}>
        <Grid spacing={2} container my={5}>
          {data?.additionalData.map((item) => (
            <DashboardDonationCard key={item.id} data={item} />
          ))}
        </Grid>

        <Box
          display={"flex"}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
          height={"300px"}
        >
          {/* line chart */}
          <LineChartCompo data={LineData} />

          {/* pie chart  */}
          <PieChartCompo data={pieData} />
        </Box>
      </Box>
    </Container>
  );
}
