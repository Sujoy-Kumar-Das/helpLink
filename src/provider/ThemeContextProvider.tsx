import { theme } from "@/constants/theme.constants";
import ThemeContext, {
  IThemeContext,
  TThemeMode,
} from "@/contexts/ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ThemeProvider } from "@emotion/react";
import { ReactElement } from "react";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactElement;
}) {
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
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
