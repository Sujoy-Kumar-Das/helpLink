import { z } from "zod";

const TEditDonation = z.object({
  title: z.string(),
  amount: z.string(),
  description: z.string(),
  category: z.string().optional(),
});

export default TEditDonation;
