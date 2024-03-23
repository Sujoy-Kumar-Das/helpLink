import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import From from "../components/from/From";
import FromSubmit from "../components/from/FromSubmit";
import FromTextArea from "../components/from/FromTextArea";
import InputField from "../components/from/InputField";
import InputFile from "../components/from/InputFile";
import CustomContainer from "../components/ui/shared/CustomContainer";
import Header from "../components/ui/shared/Header";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";
import { useCreateVolunteerMutation } from "../redux/features/volunteer/volunteer.api";
import { useAppSelector } from "../redux/redux.hooks";
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

  const createVolunteerSchema = z.object({
    phone: z.string(),
    emergencyPhone: z.string(),
    location: z.string(),
    image: z
      .any()
      .refine((files) => files?.length == 1, "Image is required.")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max file size is 5MB.`
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        ".jpg, .jpeg, .png and .webp files are accepted."
      ),
    summery: z.string(),
  });
  return (
    <CustomContainer margin={false}>
      <Header
        title="Join Our Volunteer Team"
        subTitle=" Make a Difference by Giving Back to Your Community"
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
