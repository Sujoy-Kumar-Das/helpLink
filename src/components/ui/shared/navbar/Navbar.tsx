"use client";
import {
  Campaign,
  Close as CloseIcon,
  ExpandMore,
  Menu as MenuIcon,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

// Scroll to hide AppBar on scroll down
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campaignsAnchor, setCampaignsAnchor] = useState(null);
  const [aboutAnchor, setAboutAnchor] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCampaignsClick = (event) => {
    setCampaignsAnchor(event.currentTarget);
  };

  const handleAboutClick = (event) => {
    setAboutAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setCampaignsAnchor(null);
    setAboutAnchor(null);
  };

  const navItems = [
    { text: "Home", href: "/" },
    {
      text: "Campaigns",
      href: "/campaigns",
      dropdown: [
        { text: "All Campaigns", href: "/campaigns" },
        { text: "Clean Water", href: "/campaigns/clean-water" },
        { text: "Education", href: "/campaigns/education" },
        { text: "Emergency Relief", href: "/campaigns/emergency" },
      ],
    },
    {
      text: "About",
      href: "/about",
      dropdown: [
        { text: "Our Story", href: "/about" },
        { text: "Our Team", href: "/about/team" },
        { text: "Financials", href: "/about/financials" },
        { text: "Impact Reports", href: "/about/impact" },
      ],
    },
    { text: "News", href: "/news" },
    { text: "Volunteer", href: "/volunteer" },
    { text: "Contact", href: "/contact" },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          HopeLink
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component="a"
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "primary.light",
                color: "white",
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          startIcon={<VolunteerActivism />}
          sx={{
            borderRadius: 3,
            py: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            fontWeight: 600,
          }}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(26, 34, 56, 0.95) 0%, rgba(36, 51, 86, 0.95) 100%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 4px 30px rgba(0, 0, 0, 0.5)"
                : "0 4px 20px rgba(0, 0, 0, 0.08)",
            color: theme.palette.text.primary,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ py: 1 }}>
              {/* Logo */}
              <Typography
                variant="h4"
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  fontWeight: 800,
                  color: "primary.main",
                  textDecoration: "none",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: { xs: "none", md: "block" },
                }}
              >
                HopeLink
              </Typography>

              <Typography
                variant="h5"
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  fontWeight: 800,
                  color: "primary.main",
                  textDecoration: "none",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: { xs: "block", md: "none" },
                }}
              >
                HopeLink
              </Typography>

              {/* Desktop Navigation */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  gap: 1,
                }}
              >
                {navItems.map((item) =>
                  item.dropdown ? (
                    <Box key={item.text}>
                      <Button
                        onClick={
                          item.text === "Campaigns"
                            ? handleCampaignsClick
                            : handleAboutClick
                        }
                        endIcon={<ExpandMore />}
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          fontSize: "1rem",
                          "&:hover": {
                            color: "primary.main",
                            backgroundColor: "rgba(25, 118, 210, 0.04)",
                          },
                        }}
                      >
                        {item.text}
                      </Button>

                      <Menu
                        anchorEl={
                          item.text === "Campaigns"
                            ? campaignsAnchor
                            : aboutAnchor
                        }
                        open={Boolean(
                          item.text === "Campaigns"
                            ? campaignsAnchor
                            : aboutAnchor
                        )}
                        onClose={handleClose}
                        sx={{
                          "& .MuiPaper-root": {
                            borderRadius: 3,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                            border:
                              theme.palette.mode === "dark"
                                ? "1px solid rgba(255, 255, 255, 0.1)"
                                : "1px solid rgba(0, 0, 0, 0.1)",
                            mt: 1,
                          },
                        }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <MenuItem
                            key={dropdownItem.text}
                            onClick={handleClose}
                            sx={{
                              minWidth: 200,
                              fontWeight: 500,
                              "&:hover": {
                                backgroundColor: "primary.light",
                                color: "white",
                              },
                            }}
                          >
                            {dropdownItem.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={item.text}
                      href={item.href}
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: "1rem",
                        "&:hover": {
                          color: "primary.main",
                          backgroundColor: "rgba(25, 118, 210, 0.04)",
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  )
                )}
              </Box>

              {/* Desktop CTA Buttons */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  href="/volunteer"
                  startIcon={<VolunteerActivism />}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    borderWidth: 2,
                    "&:hover": {
                      borderWidth: 2,
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Volunteer
                </Button>
                <Button
                  variant="contained"
                  href="/donate"
                  startIcon={<Campaign />}
                  sx={{
                    borderRadius: 3,
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    boxShadow: `0 4px 15px rgba(25, 118, 210, 0.3)`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                      boxShadow: `0 6px 20px rgba(25, 118, 210, 0.4)`,
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Donate Now
                </Button>
              </Box>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: "text.primary",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, #1A2238 0%, #243356 100%)"
                : "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}
