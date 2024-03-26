import { Box, Container, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import DonationFrom from "../components/from/donationFrom/DonationFrom";
import { useCreateDonationMutation } from "../redux/features/allDonations/createDonation.api";
import { useAppSelector } from "../redux/redux.hooks";
import TCreateDonationSchema from "../types/createDonation.type";
import toastMessage from "../utils/toastMessage";

export default function CreateDonation() {
  //   redux hooks
  const [createDonation, { isLoading }] = useCreateDonationMutation();
  const user = useAppSelector((state) => state.auth.user);

  const handleCreateDonation = async (data: FieldValues) => {
    data.amount = Number(data.amount);

    const donationData = {
      user,
      image: user?.image,
      ...data,
    };

    const res = await createDonation(donationData).unwrap();

    toastMessage(res);
  };

  return (
    <Container component={"section"}>
      <Box minHeight={"100vh"} pt={5}>
        <div>
          <Typography
            component={"h1"}
            variant="h3"
            textAlign={"center"}
            color={"text.primary"}
          >
            Create Donation{" "}
          </Typography>
          <Box sx={{ width: { xs: "100%", md: "60%" }, mx: "auto" }}>
            <DonationFrom
              isLoading={isLoading}
              handler={handleCreateDonation}
              schema={TCreateDonationSchema}
            />
          </Box>
        </div>
      </Box>
    </Container>
  );
}
