import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import From from "../components/from/From";
import FromSubmit from "../components/from/FromSubmit";
import FromTextArea from "../components/from/FromTextArea";
import InputField from "../components/from/InputField";
import InputFile from "../components/from/InputFile";
import CustomContainer from "../components/ui/shared/CustomContainer";
import Header from "../components/ui/shared/Header";
import { useCreateVolunteerMutation } from "../redux/features/volunteer/volunteer.api";
import { useAppSelector } from "../redux/redux.hooks";
import { createVolunteerSchema } from "../types/createVolunteer.type";
import toastMessage from "../utils/toastMessage";
import { uploadImage } from "../utils/uploadImage";

export default function Volunteer() {
  // redux hooks
  const user = useAppSelector((state) => state.auth.user);
  const [createVolunteer, { isLoading }] = useCreateVolunteerMutation();

  const handleCreateVolunteer = async (data: FieldValues) => {
    data.image = await uploadImage(data.image);
    const volunteerData = {
      name: user?.name,
      email: user?.email,
      ...data,
    };
    const res = await createVolunteer(volunteerData).unwrap();

    toastMessage(res);
  };

  return (
    <CustomContainer margin={false}>
      <Header
        title="Join Our Volunteer Team"
        subTitle=" Make a Difference by Giving Back to Your Community"
        animation={false}
      />

      <Box sx={{ width: { xs: "100%", md: "60%" }, mx: "auto" }}>
        <From handler={handleCreateVolunteer} schema={createVolunteerSchema}>
          <InputField label="Phone" name="phone" type="tel" />
          <InputField
            label="Emergency Phone"
            name="emergencyPhone"
            type="tel"
          />
          <InputField label="Location" name="location" type="text" />
          <InputFile name="image" />
          <FromTextArea
            label="Why you like to join us"
            name="summery"
            type="text"
          />

          <FromSubmit loading={isLoading} text="Apply Now" />
        </From>
      </Box>
    </CustomContainer>
  );
}
