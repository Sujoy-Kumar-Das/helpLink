import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FieldValues } from "react-hook-form";
import { useCreateDonationMutation } from "../../../redux/features/allDonations/createDonation.api";
import { useAppSelector } from "../../../redux/redux.hooks";
import { ModalStyle } from "../../../styles";
import TCreateDonationSchema from "../../../types/createDonation.type";
import DonationFrom from "../../from/donationFrom/DonationFrom";
import toastMessage from "../../../utils/toastMessage";

type TCreateDonationModal = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CreateDonationModal({
  open,
  setOpen,
}: TCreateDonationModal) {
  //   redux hooks
  const [createDonation, { isLoading }] = useCreateDonationMutation();
  const user = useAppSelector((state) => state.auth.user);

  // event handler
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateDonation = async (data: FieldValues) => {
    data.amount = Number(data.amount);

    const donationData = {
      user,
      image: user?.image,
      ...data,
    };

    const res = await createDonation(donationData).unwrap();
    if (res.success) {
      setOpen(false);
    }
    toastMessage(res);
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={ModalStyle}>
        <Typography
          id="keep-mounted-modal-title"
          variant="h5"
          component="h2"
          textAlign={"center"}
        >
          Create Donation now!
        </Typography>
        <DonationFrom
          isLoading={isLoading}
          handler={handleCreateDonation}
          schema={TCreateDonationSchema}
        />
      </Box>
    </Modal>
  );
}
