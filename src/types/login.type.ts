import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../constants";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const passwordErrorMessage =
  "Password must be at least 8 characters long and contain at least one letter and one number.";

export const TLoginSchema = z.object({
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(8, { message: "password is required" }),
});

export const TCreateUserSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
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
  location: z.string().min(1, { message: "Location is required." }),
  email: z.string().email().min(1, { message: "email is required" }),

  password: z.string().regex(passwordRegex, { message: passwordErrorMessage }),
});
