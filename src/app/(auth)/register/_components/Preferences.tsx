import InputCheck from "@/components/shared/from/InputCheck";
import InputSelect from "@/components/shared/from/InputSelect";

import { Typography } from "@mui/material";

const userType = [
  {
    id: crypto.randomUUID(),
    title: "Donor",
    value: "donor",
  },
  {
    id: crypto.randomUUID(),
    title: "Volunteer",
    value: "volunteer",
  },
  {
    id: crypto.randomUUID(),
    title: "Member",
    value: "member",
  },
];

export const areasOfInterest = [
  {
    id: crypto.randomUUID(),
    title: "Education",
    value: "education",
  },
  {
    id: crypto.randomUUID(),
    title: "Health & Medical Aid",
    value: "health",
  },
  {
    id: crypto.randomUUID(),
    title: "Environment",
    value: "environment",
  },
  {
    id: crypto.randomUUID(),
    title: "Child Support",
    value: "child_support",
  },
  {
    id: crypto.randomUUID(),
    title: "Community Development",
    value: "community",
  },
];

const AccountPreference = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "text.primary", mb: 3 }}
      >
        Preferences & Legal
      </Typography>

      {/* User Type */}
      <InputSelect items={userType} label="User Type" name="user_type" />

      {/* Areas of Interest */}
      <InputSelect items={areasOfInterest} label="Interest" name="interest" />

      {/* Legal Agreements */}
    </>
  );
};

export default AccountPreference;
