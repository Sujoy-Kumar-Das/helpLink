import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContextProvider";
import { useAppSelector } from "../../../../redux/redux.hooks";
import navLinkGenerator from "../../../../utils/navLinkGenarator";
import NavDrawer from "./NavDrawer";
import NavLinks from "./NavLinks";
import NavTitle from "./NavTitle";
import NavToggleButton from "./NavToggleButton";

interface Props {
  window?: () => Window;
}

export default function Navbar(props: Props) {
  // get the user from redux store
  const token = useAppSelector((state) => state.auth.token);
  // generate navLinks based on user
  const navItems = navLinkGenerator(token);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="div"
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "none",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: "10px",
            marginBottom: "0px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavTitle />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavLinks navItems={navItems} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavToggleButton />
          </Box>
        </Container>
      </AppBar>
      <NavDrawer
        container={container}
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
