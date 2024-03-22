import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetAllDonationQuery } from "../../redux/features/allDonations/allDonations.api";
import Loader from "../Loader";
import DonationGrid from "../donation/DonationGrid";
import CustomContainer from "../ui/shared/CustomContainer";
import Header from "../ui/shared/Header";

export default function DonationHome() {
  const { data, isLoading } = useGetAllDonationQuery(6);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <CustomContainer bgColor={false} margin={false}>
      <Header title="Donation" subTitle="Make an impact with your donation" />

      <DonationGrid data={data?.data} />
      <Box
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1700"
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100%" }}
      >
        <Link to={"/all-donations"}>
          <Button variant="contained" color="primary" size="large">
            Show More
          </Button>
        </Link>
      </Box>
    </CustomContainer>
  );
}
