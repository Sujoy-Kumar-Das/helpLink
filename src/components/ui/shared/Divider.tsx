import { Box } from "@mui/material";

export default function Divider() {
  return (
    <Box
      width={"100%"}
      height={"2px"}
      sx={{ backgroundColor: "text.primary", my: 2 }}
    ></Box>
  );
}
