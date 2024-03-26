import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

export const createVolunteerSchema = z.object({
  phone: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters." }),
  emergencyPhone: z.string().min(5, {
    message: "Emergency phone number must be at least 5 characters.",
  }),
  location: z
    .string()
    .min(3, { message: "Location must be at least 3 characters." }),
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
  summery: z
    .string()
    .min(10, { message: "Summary must be at least 10 characters." }),
});
