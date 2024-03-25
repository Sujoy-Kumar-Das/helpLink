import { Container } from "@mui/material";
import Loader from "../components/Loader";
import LeaderBoardTable from "../components/leaderboard/LeaderBoardTable";
import Header from "../components/ui/shared/Header";
import { useGetAllDashboardDonationQuery } from "../redux/features/allDonations/dashboardDonation.api";

export default function LeaderBoard() {
  const { data, isLoading } = useGetAllDashboardDonationQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container sx={{ mt: 5 }}>
      <Header
        title="Leader Board"
        subTitle="Hero's who help to make some changes"
        animation={false}
      />

      <LeaderBoardTable data={data.data} />
    </Container>
  );
}
