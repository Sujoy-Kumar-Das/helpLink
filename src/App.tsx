import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { TThemeValue, ThemeContext } from "./contexts/ThemeContextProvider";
import { routes } from "./routes/routes";

export default function App() {
  const { mode } = useContext(ThemeContext) as TThemeValue;
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3f51b5", // Indigo
      },
      secondary: {
        main: "#ff9800", // Amber
      },
      text: {
        primary: "#fff", // White text color
        secondary: "#ccc", // Light grey text color
      },
      background: {
        default: "#121212",
        paper: "#333333",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3f51b5", // Indigo
      },
      secondary: {
        main: "#ff9800", // Amber
      },
      text: {
        primary: "#000", // Dark grey text color
        secondary: "#666", // Light grey text color
      },
      background: {
        default: "#ffff",
        paper: "whitesmoke",
      },
    },
  });
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <Box sx={{ backgroundColor: "background.default" }}>
        <RouterProvider router={routes} />
      </Box>
    </ThemeProvider>
  );
}
