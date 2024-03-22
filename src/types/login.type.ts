import { z } from "zod";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const passwordErrorMessage =
  "Password must be at least 8 characters long and contain at least one letter and one number.";

export const TLoginSchema = z.object({
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(8, { message: "password is required" }),
});

export const TCreateUserSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().regex(passwordRegex, { message: passwordErrorMessage }),
});
