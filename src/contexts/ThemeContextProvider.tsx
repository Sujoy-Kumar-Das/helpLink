import { ReactElement, createContext, useState } from "react";

export type TThemeValue = {
  mode: string;
  handleTheme: (value: string) => void;
};

// Corrected the component name to ThemeContext
export const ThemeContext = createContext<TThemeValue | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const getTheme = () => {
    const savedMode = localStorage.getItem("theme");
    return savedMode || "light";
  };

  const [mode, setMode] = useState(getTheme);

  const handleTheme = (value: string) => {
    setMode(value);
    localStorage.setItem("theme", value);
  };

  const themeValue: TThemeValue = {
    mode,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}
