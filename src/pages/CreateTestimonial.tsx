import { Box, Container, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import From from "../components/from/From";
import FromSubmit from "../components/from/FromSubmit";
import FromTextArea from "../components/from/FromTextArea";
import InputField from "../components/from/InputField";
import InputFile from "../components/from/InputFile";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";
import { useCreateTestimonialMutation } from "../redux/features/testimonials/createTestimonial";
import toastMessage from "../utils/toastMessage";
import { uploadImage } from "../utils/uploadImage";

export default function CreateTestimonial() {
  const [createTestimonial, { isLoading }] = useCreateTestimonialMutation();
  const handleTestimonial = async (data: FieldValues) => {
    data.image = await uploadImage(data.image);
    data.donation_amount = Number(data.donation_amount);
    const res = await createTestimonial(data).unwrap();

    toastMessage(res);
  };

  const testimonialSchema = z.object({
    name: z.string(),
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
    testimonial: z.string(),
    donation_amount: z.string(),
  });
  return (
    <Container
      component={"section"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"}>
        <Typography
          component={"h1"}
          variant="h3"
          textAlign={"center"}
          color={"text.primary"}
        >
          Create Testimonial{" "}
        </Typography>
        <Box sx={{ width: { xs: "100%", md: "60%" }, mx: "auto" }}>
          <From handler={handleTestimonial} schema={testimonialSchema}>
            <InputField label="Name" name="name" type="text" />
            <InputField label="Location" name="location" type="text" />
            <InputField label="Amount" name="donation_amount" type="number" />
            <InputFile name="image" />
            <FromTextArea label="Testimonial" name="testimonial" type="text" />

            <FromSubmit loading={isLoading} text="Post Now" />
          </From>
        </Box>
      </Box>
    </Container>
  );
}
