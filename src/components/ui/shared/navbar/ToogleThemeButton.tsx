"use client";
import useThemeContext from "@/hooks/useThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function ToggleThemeButton() {
  const { mode, handleTheme } = useThemeContext();
  return (
    <IconButton
      onClick={() => handleTheme(mode === "light" ? "dark" : "light")}
      sx={{
        color: "text.primary",
        background: "primary.main",
        "&:hover": {
          background: "primary.main",
          transform: "rotate(15deg)",
        },
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
