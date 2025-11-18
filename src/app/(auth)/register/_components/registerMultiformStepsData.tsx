import { authSchema } from "@/schemas";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";

const createAccountSchema = authSchema.createAccount;

const registerMultiformStepsData = [
  {
    id: crypto.randomUUID(),
    component: <PersonalInfo />,
    schema: createAccountSchema.personalInfo,
  },
  {
    id: crypto.randomUUID(),
    component: <AccountInfo />,
    schema: createAccountSchema.accountInfo,
  },
];

export default registerMultiformStepsData;
