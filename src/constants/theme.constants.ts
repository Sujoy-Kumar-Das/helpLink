/* eslint-disable @typescript-eslint/no-explicit-any */

import { createTheme, ThemeOptions } from "@mui/material";

const light: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E6DC6",
      light: "#4A90E2",
      dark: "#1557A3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2E8B57",
      light: "#4CAF7A",
      dark: "#1F6B41",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A2027",
      secondary: "#5A6C7D",
    },
    success: { main: "#10B981", light: "#34D399", dark: "#059669" },
    error: { main: "#DC3545", light: "#E74C3C", dark: "#C53030" },
    warning: { main: "#F59E0B", light: "#FBBF24", dark: "#D97706" },
    info: { main: "#3B82F6", light: "#60A5FA", dark: "#2563EB" },
    grey: {
      50: "#F8F9FA",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
      900: "#1A1E21",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "3rem", lineHeight: 1.2 },
    h2: { fontWeight: 600, fontSize: "2.5rem", lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: "2rem", lineHeight: 1.4 },
    h4: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.4 },
    h5: { fontWeight: 500, fontSize: "1.25rem", lineHeight: 1.5 },
    h6: { fontWeight: 500, fontSize: "1.125rem", lineHeight: 1.6 },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
      color: "#5A6C7D",
    },
    body2: { fontSize: "0.875rem", lineHeight: 1.5, color: "#6C757D" },
    button: { fontWeight: 600, textTransform: "none", letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 12 },
  shadows: Array(25).fill("0px 4px 8px rgba(0,0,0,0.1)") as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
          backgroundAttachment: "fixed",
          fontFeatureSettings: "'cv11', 'ss01'",
          fontVariationSettings: "'opsz' 32",
        },
        html: { scrollBehavior: "smooth" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "14px 32px",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "1rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transition: "left 0.6s ease-in-out",
          },
          "&:hover::before": { left: "100%" },
          "&:hover": { transform: "translateY(-2px)" },
          "&.Mui-disabled": {
            background: "linear-gradient(135deg, #CED4DA 0%, #ADB5BD 100%)",
            color: "#6C757D",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "#FFFFFF",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
});

const darkOverrides: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#4A90E2",
      light: "#6BA8F0",
      dark: "#1E6DC6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4CAF7A",
      light: "#6BCF95",
      dark: "#2E8B57",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "linear-gradient(135deg, #0F1419 0%, #1A2027 100%)",
      paper: "rgba(30, 35, 42, 0.8)",
    },
    text: {
      primary: "#F8F9FA",
      secondary: "#ADB5BD",
      disabled: "#6C757D",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #0F1419 0%, #1A2027 100%)",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(30, 35, 42, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
          },
        },
      },
    },
  },
};

const dark = createTheme(light, darkOverrides);

export const theme = { light, dark };
