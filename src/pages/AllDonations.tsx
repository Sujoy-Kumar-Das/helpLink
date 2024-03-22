import { Container } from "@mui/material";
import Loader from "../components/Loader";
import DonationGrid from "../components/donation/DonationGrid";
import { useGetAllDonationQuery } from "../redux/features/allDonations/allDonations.api";

export default function AllDonations() {
  const { data, isLoading } = useGetAllDonationQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container data-aos="fade-up" component={"section"} sx={{ mt: 5 }}>
      <DonationGrid data={data.data} />
    </Container>
  );
}
