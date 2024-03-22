import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

const TCreateDonationSchema = z.object({
  title: z.string().min(5, { message: "Title must have 5 characters." }),
  amount: z
    .string()
    .min(2, { message: "Donation amount must have 2 numbers." }),
  description: z
    .string()
    .min(20, { message: "Donation description must have 20 characters long." }),
  category: z.string(),
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
});

export default TCreateDonationSchema;
