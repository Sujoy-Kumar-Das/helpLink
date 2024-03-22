import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FieldValues } from "react-hook-form";
import { useUpdateDonationMutation } from "../../../redux/features/allDonations/updateDonation.api";
import { ModalStyle } from "../../../styles";
import { TDonationItem } from "../../../types";
import TEditDonation from "../../../types/editDonation.type";
import toastMessage from "../../../utils/toastMessage";
import DonationFrom from "../../from/donationFrom/DonationFrom";

type TEditDonationModal = {
  open: boolean;
  setOpen: (open: boolean) => void;
  donation: TDonationItem | null;
};

export default function EditDonationModal({
  open,
  setOpen,
  donation,
}: TEditDonationModal) {
  // redux hooks
  const [updateDonation, { isLoading }] = useUpdateDonationMutation();

  // event handler
  const handleClose = () => setOpen(false);

  const handleEdit = async (data: FieldValues) => {
    const editedData = {
      title: data?.title ? data.title : donation?.title,
      category: data?.category ? data.category : donation?.category,
      description: data?.description ? data.desorption : donation?.description,
      amount: data?.amount ? data.amount : donation?.amount,
    };

    const res = await updateDonation({
      id: donation?._id,
      data: editedData,
    }).unwrap();

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
          Update Donation now!
        </Typography>

        <DonationFrom
          handler={handleEdit}
          isLoading={isLoading}
          schema={TEditDonation}
          isCreate={false}
        />
      </Box>
    </Modal>
  );
}
