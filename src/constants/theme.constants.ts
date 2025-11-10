import { createTheme } from "@mui/material";

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E6DC6", // More trustworthy blue
      light: "#4A90E2",
      dark: "#1557A3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2E8B57", // Soothing green for donation actions
      light: "#4CAF7A",
      dark: "#1F6B41",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A2027", // Better contrast ratio
      secondary: "#5A6C7D",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    error: {
      main: "#DC3545", // More professional red
      light: "#E74C3C",
      dark: "#C53030",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
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
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      letterSpacing: "-0.015em",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
      color: "#5A6C7D",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      fontWeight: 400,
      color: "#6C757D",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12, // Slightly more conservative
  },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
    "0 2px 6px -1px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)",
    "0 8px 15px -3px rgba(0, 0, 0, 0.05), 0 3px 6px -2px rgba(0, 0, 0, 0.03)",
    "0 15px 20px -5px rgba(0, 0, 0, 0.06), 0 5px 10px -5px rgba(0, 0, 0, 0.02)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.08)",
    "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
    ...Array(17).fill("0 25px 50px -12px rgba(0, 0, 0, 0.12)"),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
          backgroundAttachment: "fixed",
          fontFeatureSettings: "'cv11', 'ss01'",
          fontVariationSettings: "'opsz' 32",
        },
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "12px 28px",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "1rem",
          letterSpacing: "0.02em",
          transition: "all 0.2s ease-in-out",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "linear-gradient(135deg, #1E6DC6 0%, #4A90E2 100%)",
            boxShadow: "0 4px 12px rgba(30, 109, 198, 0.2)",
            "&:hover": {
              background: "linear-gradient(135deg, #1557A3 0%, #1E6DC6 100%)",
              boxShadow: "0 6px 16px rgba(30, 109, 198, 0.3)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "linear-gradient(135deg, #2E8B57 0%, #4CAF7A 100%)",
            boxShadow: "0 4px 12px rgba(46, 139, 87, 0.2)",
            "&:hover": {
              background: "linear-gradient(135deg, #1F6B41 0%, #2E8B57 100%)",
              boxShadow: "0 6px 16px rgba(46, 139, 87, 0.3)",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderWidth: "1.5px",
            background: "transparent",
            "&:hover": {
              background: "rgba(30, 109, 198, 0.04)",
            },
          },
        },
      ],
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            background: "rgba(255, 255, 255, 0.8)",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1E6DC6",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1E6DC6",
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "1px solid",
        },
        standardSuccess: {
          background: "rgba(16, 185, 129, 0.05)",
          borderColor: "rgba(16, 185, 129, 0.2)",
        },
        standardError: {
          background: "rgba(220, 53, 69, 0.05)",
          borderColor: "rgba(220, 53, 69, 0.2)",
        },
      },
    },
  },
});

// Dark Theme
const dark = createTheme({
  ...light,
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
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    error: {
      main: "#DC3545",
      light: "#E74C3C",
      dark: "#C53030",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
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
    divider: "rgba(255, 255, 255, 0.08)",
    action: {
      active: "#F8F9FA",
      hover: "rgba(255, 255, 255, 0.05)",
      hoverOpacity: 0.05,
      selected: "rgba(255, 255, 255, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  },
  components: {
    ...light.components,
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
          ...light.components.MuiButton.styleOverrides.root,
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "linear-gradient(135deg, #4A90E2 0%, #1E6DC6 100%)",
            boxShadow: "0 4px 12px rgba(74, 144, 226, 0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #1E6DC6 0%, #4A90E2 100%)",
              boxShadow: "0 6px 16px rgba(74, 144, 226, 0.35)",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "linear-gradient(135deg, #4CAF7A 0%, #2E8B57 100%)",
            boxShadow: "0 4px 12px rgba(76, 175, 122, 0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #2E8B57 0%, #4CAF7A 100%)",
              boxShadow: "0 6px 16px rgba(76, 175, 122, 0.35)",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: "rgba(255, 255, 255, 0.2)",
            color: "#F8F9FA",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
          },
        },
      ],
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(26, 32, 39, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "rgba(255, 255, 255, 0.03)",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4A90E2",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4A90E2",
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "1px solid",
        },
        standardSuccess: {
          background: "rgba(16, 185, 129, 0.1)",
          borderColor: "rgba(16, 185, 129, 0.3)",
        },
        standardError: {
          background: "rgba(220, 53, 69, 0.1)",
          borderColor: "rgba(220, 53, 69, 0.3)",
        },
      },
    },
  },
});

export const theme = {
  light,
  dark,
};
