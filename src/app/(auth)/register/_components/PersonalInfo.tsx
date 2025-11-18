import InputField from "@/components/shared/from/InputField";
import { Typography } from "@mui/material";

const PersonalInfo = () => (
  <>
    <Typography variant="h6" gutterBottom sx={{ color: "text.primary", mb: 3 }}>
      Personal Information
    </Typography>

    <InputField
      label="First Name"
      name="first_name"
      type="text"
      InputProps={{ sx: { borderRadius: 3 } }}
    />

    <InputField
      label="Last Name"
      name="last_name"
      type="text"
      InputProps={{ sx: { borderRadius: 3 } }}
    />

    <InputField
      label="Phone"
      name="phone"
      type="tel"
      InputProps={{ sx: { borderRadius: 3 } }}
    />
  </>
);

export default PersonalInfo;
