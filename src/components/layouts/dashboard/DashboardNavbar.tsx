import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, IconButton } from "@mui/material";
import { TDashboardPath, TRoutesItem } from "../../../types";
import Divider from "../../ui/shared/Divider";
import NavLinks from "../../ui/shared/navbar/NavLinks";
import NavTitle from "../../ui/shared/navbar/NavTitle";
import ToggleButton from "../../ui/shared/navbar/ToggleButton";

type TDashboardNavbarProps = {
  navItems: TRoutesItem[];
  dashboardPaths: TDashboardPath[];
  handleDrawerToggle: () => void;
};

export default function DashboardNavbar({
  navItems,
  dashboardPaths,
  handleDrawerToggle,
}: TDashboardNavbarProps) {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        position: "sticky",
        top: 0,
        left: 0,
      }}
      minHeight={{ xs: "auto", md: "100vh" }}
      py={{ xs: 2, md: 4 }}
      component={"div"}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "center" },
          alignItems: "center",
          height: "100%",
        }}
        component={"div"}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" }, color: "text.primary" }}
        >
          <MenuIcon />
        </IconButton>{" "}
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <NavTitle />
            <ToggleButton hide={true} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {" "}
            <Divider />
          </Box>
        </Box>
      </Container>
      <Box
        textAlign={"center"}
        display={{ xs: "none", md: "flex" }}
        justifyContent={"center"}
        height={"100%"}
        mt={2}
      >
        <NavLinks
          navItems={navItems}
          dashboard={true}
          dashboardItems={dashboardPaths}
        />
      </Box>
    </Box>
  );
}
