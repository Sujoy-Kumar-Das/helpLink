import { createTheme } from "@mui/material";

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#ff9800",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
    background: {
      default: "#121212",
      paper: "#333333",
    },
  },
});

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#ff9800",
    },
    text: {
      primary: "#000",
      secondary: "#666",
    },
    background: {
      default: "#ffff",
      paper: "whitesmoke",
    },
  },
});

export const theme = {
  light,
  dark,
};
