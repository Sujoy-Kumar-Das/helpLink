"use client";

import DonationButton from "@/components/button/DonationButton";
import Logo from "@/components/logo/Logo";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import NavLinks from "./NavLinks";
import ToggleThemeButton from "./ToogleThemeButton";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)"
            : "linear-gradient(135deg, rgba(26,34,56,0.95) 0%, rgba(36,51,86,0.9) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 4 },
          py: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        {!isMobile && <NavLinks />}

        {/* toggle theme button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isMobile && <ToggleThemeButton />}

          {/* Donate Button */}
          <DonationButton />

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.text.primary,
                background: alpha(theme.palette.primary.main, 0.05),
                "&:hover": {
                  background: alpha(theme.palette.primary.main, 0.1),
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <NavDrawer onDrawerToggle={handleDrawerToggle} open={mobileOpen} />
    </AppBar>
  );
};

export default Navbar;
