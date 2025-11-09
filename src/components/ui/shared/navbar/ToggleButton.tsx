import useThemeContext from "@/hooks/useThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ToggleButton({ hide }: { hide: boolean }) {
  const { handleTheme, mode } = useThemeContext();

  return (
    <Box
      sx={{ color: "text.primary" }}
      display={{
        xs: `${hide ? "none" : "block"}`,
        md: `${hide ? "block" : "none"}`,
      }}
    >
      {mode === "dark" ? (
        <p onClick={() => handleTheme("light")}>
          <LightMode />
        </p>
      ) : (
        <p onClick={() => handleTheme("dark")}>
          <DarkMode />
        </p>
      )}
    </Box>
  );
}
