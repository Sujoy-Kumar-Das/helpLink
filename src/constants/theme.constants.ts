/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, ThemeOptions } from "@mui/material";

// LIGHT THEME
const light: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB",
      light: "#60A5FA",
      dark: "#1E40AF",
      contrastText: "#fff",
    },
    secondary: {
      main: "#16A34A",
      light: "#4ADE80",
      dark: "#15803D",
      contrastText: "#fff",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: { primary: "#111827", secondary: "#4B5563" },
    success: { main: "#22C55E" },
    error: { main: "#EF4444" },
    warning: { main: "#F59E0B" },
    info: { main: "#3B82F6" },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
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
      color: "#4B5563",
    },
    body2: { fontSize: "0.875rem", lineHeight: 1.5, color: "#6B7280" },
    button: { fontWeight: 600, textTransform: "none", letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 12 },
  shadows: Array(25).fill("0px 4px 12px rgba(0,0,0,0.1)") as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#F9FAFB",
          backgroundAttachment: "fixed",
          "--gradient": "linear-gradient(135deg, #60A5FA 0%, #86EFAC 100%)",
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
          fontSize: "1rem",
          textTransform: "none",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            transition: "left 0.6s ease-in-out",
          },
          "&:hover::before": { left: "100%" },
          "&:hover": { transform: "translateY(-2px)" },
          "&.Mui-disabled": {
            background: "#E5E7EB",
            color: "#9CA3AF",
            boxShadow: "none",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #15803D 0%, #22C55E 100%)",
          },
        },
        outlinedPrimary: {
          border: "2px solid #1976D2",
          color: "#1976D2",
          "&:hover": {
            background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
            color: "#fff",
          },
        },
        outlinedSecondary: {
          border: "2px solid #16A34A",
          color: "#16A34A",
          "&:hover": {
            background: "linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)",
            color: "#fff",
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
          border: "1px solid rgba(0,0,0,0.05)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  },
});

//  DARK THEME
const darkOverrides: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#60A5FA",
      light: "#93C5FD",
      dark: "#1D4ED8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4ADE80",
      light: "#86EFAC",
      dark: "#16A34A",
      contrastText: "#fff",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: { primary: "#F9FAFB", secondary: "#CBD5E1", disabled: "#6B7280" },
    divider: "rgba(255,255,255,0.1)",
    success: { main: "#22C55E" },
    error: { main: "#EF4444" },
    warning: { main: "#FACC15" },
    info: { main: "#38BDF8" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#0F172A",
          backgroundAttachment: "fixed",
          "--gradient":
            "linear-gradient(135deg, #0F1B4C 0%, #1D2951 50%, #064635 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          "&:hover": { transform: "translateY(-2px)" },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #4ADE80 0%, #16A34A 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
          },
        },
        outlinedPrimary: {
          border: "2px solid #60A5FA",
          color: "#60A5FA",
          "&:hover": {
            background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
            color: "#fff",
          },
        },
        outlinedSecondary: {
          border: "2px solid #4ADE80",
          color: "#4ADE80",
          "&:hover": {
            background: "linear-gradient(135deg, #4ADE80 0%, #16A34A 100%)",
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "#1E293B",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": { boxShadow: "0 12px 40px rgba(0,0,0,0.4)" },
        },
      },
    },
  },
};

const dark = createTheme(light, darkOverrides);

export const theme = { light, dark };
