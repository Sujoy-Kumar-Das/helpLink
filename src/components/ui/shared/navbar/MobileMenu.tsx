import Logo from "@/components/logo/Logo";
import useThemeContext from "@/hooks/useThemeContext";
import {
  Brightness4,
  Brightness7,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Box, FormControlLabel, IconButton, Switch } from "@mui/material";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  onDrawerToggle: () => void;
}

const MobileMenu = ({ onDrawerToggle }: MobileMenuProps) => {
  const { mode, handleTheme } = useThemeContext();

  return (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background:
          mode === "light"
            ? "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)"
            : "linear-gradient(135deg, rgba(26,34,56,0.98) 0%, rgba(36,51,86,0.95) 100%)",
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          p: 3,
          borderBottom: `1px solid divider`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <IconButton
          onClick={onDrawerToggle}
          sx={{
            color: "text.primary",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <Box sx={{ flex: 1, p: 2 }}>
        <NavLinks
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            alignItems: "flex-start",
            gap: 1,
          }}
        />
      </Box>

      {/* Theme Toggle in Drawer */}
      <Box
        sx={{
          p: 3,
          borderTop: `1px solid divider`,
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={mode === "dark"}
              onChange={(e) => handleTheme(e.target.checked ? "dark" : "light")}
              icon={<Brightness7 sx={{ color: "text.primary" }} />}
              checkedIcon={<Brightness4 sx={{ color: "warning.main" }} />}
            />
          }
          label={mode === "dark" ? "Dark" : "Light"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            m: 0,
            "& .MuiFormControlLabel-label": {
              fontWeight: 500,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MobileMenu;
