import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useContext } from "react";
import {
  TThemeValue,
  ThemeContext,
} from "../../../../contexts/ThemeContextProvider";

export default function ToggleButton({ hide }: { hide: boolean }) {
  const { handleTheme, mode } = useContext(ThemeContext) as TThemeValue;
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
