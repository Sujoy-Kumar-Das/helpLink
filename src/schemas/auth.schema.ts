import { z } from "zod";

const login = z.object({
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long." })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter.",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number.",
    })
    .refine((val) => /[@$!%*?&]/.test(val), {
      message:
        "Password must contain at least one special character (@$!%*?&).",
    }),
});

const personalInfo = z.object({
  first_name: z
    .string({ required_error: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters long" }),

  last_name: z
    .string({ required_error: "Last name is required" })
    .min(2, { message: "Last name must be at least 2 characters long" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .regex(/^(?:\+?88)?01[3-9]\d{8}$/, {
      message: "Please provide a valid Bangladeshi phone number",
    }),
});

const accountInfo = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Please provide a valid email address" }),
    accept_terms: z
      .boolean({ required_error: "You must accept the terms and conditions" })
      .refine((val) => val === true, {
        message: "You must accept the terms and conditions",
      }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /\d/.test(val), {
        message: "Password must contain at least one number",
      })
      .refine((val) => /[@$!%*?&]/.test(val), {
        message:
          "Password must contain at least one special character (@$!%*?&)",
      }),

    confirm_password: z.string({
      required_error: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

const createAccount = {
  personalInfo,
  accountInfo,
};

export const authSchema = {
  login,
  createAccount,
};
