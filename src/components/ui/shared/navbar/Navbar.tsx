"use client";

import DonationButton from "@/components/button/DonationButton";
import Logo from "@/components/logo/Logo";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
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
        background: "var(--gradient)",
        backdropFilter: "blur(10px)",
        color: "text.primary",
        py: 1,
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
                color: "text.primary",
                background: "primary.light",
                "&:hover": {
                  background: "primary.main",
                },
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
