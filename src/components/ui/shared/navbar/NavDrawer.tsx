import { Box, Drawer, IconButton } from "@mui/material";
import { TDashboardPath, TRoutesItem } from "../../../../types";
import Divider from "../Divider";
import NavLinks from "./NavLinks";
import NavTitle from "./NavTitle";
import NavToggleButton from "./NavToggleButton";
import ToggleButton from "./ToggleButton";

type TNavDrawerProps = {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  container?: () => HTMLElement | null;
  navItems: TRoutesItem[];
  dashboardItems?: TDashboardPath[] | undefined;
};

export default function NavDrawer({
  handleDrawerToggle,
  mobileOpen,
  container,
  navItems,
  dashboardItems,
}: TNavDrawerProps) {
  const drawerWidth = "100%";

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "background.paper",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "flex-end",
          marginX: "10px",
        }}
      >
        <IconButton
          aria-label="delete"
          sx={{
            height: "50px",
            width: "50px",
            backgroundColor: "background.default",
          }}
          color="primary"
        >
          X
        </IconButton>
      </Box>
      <Box
        component={"div"}
        sx={{
          my: 2,
          textAlign: "center",
        }}
      >
        <NavTitle />
        <ToggleButton hide={false} />
      </Box>

      <Divider />

      <NavLinks
        navItems={navItems}
        dashboardItems={dashboardItems}
        dashboard={true}
      />
      <NavToggleButton />
    </Box>
  );
  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}
