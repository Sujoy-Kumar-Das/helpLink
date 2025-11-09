import { createContext } from "react";

export type TThemeMode = "dark" | "light";

export interface IThemeContext {
  mode: TThemeMode;
  handleTheme: (value: TThemeMode) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);
