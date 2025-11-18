import InputCheck from "@/components/shared/from/InputCheck";
import InputField from "@/components/shared/from/InputField";
import { Typography } from "@mui/material";

const AccountInfo = () => (
  <>
    <Typography variant="h6" gutterBottom sx={{ color: "text.primary", mb: 3 }}>
      Account Information
    </Typography>

    <InputField
      label="Email"
      name="email"
      type="email"
      InputProps={{ sx: { borderRadius: 3 } }}
    />

    <InputField
      label="Password"
      name="password"
      type="password"
      InputProps={{ sx: { borderRadius: 3 } }}
    />

    <InputField
      label="Confirm Password"
      name="confirm_password"
      type="password"
      InputProps={{ sx: { borderRadius: 3 } }}
    />

    <InputCheck name="accept_terms" label="I accept the Terms & Conditions" />
  </>
);

export default AccountInfo;
