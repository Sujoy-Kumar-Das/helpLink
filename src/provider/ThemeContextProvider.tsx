"use client";
import { theme } from "@/constants/theme.constants";
import {
  IThemeContext,
  ThemeContext,
  TThemeMode,
} from "@/contexts/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  // custom hook for sync with localstorage
  const [value, setValue] = useLocalStorage<TThemeMode>("theme", "light");

  const handleTheme = (value: TThemeMode) => {
    setValue(value);
  };

  const themeValue: IThemeContext = {
    mode: value,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={value === "dark" ? theme.dark : theme.light}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
