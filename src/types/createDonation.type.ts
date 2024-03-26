import { z } from "zod";

const TCreateDonationSchema = z.object({
  title: z.string().min(5, { message: "Title must have 5 characters." }),
  amount: z
    .string()
    .min(2, { message: "Donation amount must have 2 numbers." }),
  description: z
    .string()
    .min(20, { message: "Donation description must have 20 characters long." }),
  category: z.string(),
});

export default TCreateDonationSchema;
