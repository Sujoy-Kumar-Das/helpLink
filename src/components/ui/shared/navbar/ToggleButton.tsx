import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ToggleButton({ mode, hide }) {
  return (
    <Box
      sx={{ color: "text.primary" }}
      display={{
        xs: `${hide ? "none" : "block"}`,
        md: `${hide ? "block" : "none"}`,
      }}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </Box>
  );
}
