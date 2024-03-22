import { Grid } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../../redux/redux.hooks";
import navLinkGenerator from "../../../utils/navLinkGenarator";
import NavDrawer from "../../ui/shared/navbar/NavDrawer";
import DashboardNavbar from "./DashboardNavbar";

interface Props {
  window?: () => Window;
}

export default function DashBoardLayout(props: Props) {
  // get the user from redux store
  const token = useAppSelector((state) => state.auth.token);
  // generate navLinks based on user
  const navItems = navLinkGenerator(token);
  const dashboardPaths = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "All Donations", path: "/dashboard/all-donations" },
    { name: "create donation", path: "/dashboard/create-donation" },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Grid container spacing={1} columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4} md={3}>
          <DashboardNavbar
            dashboardPaths={dashboardPaths}
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Grid>
        <Grid item xs={4} md={9} sx={{ backgroundColor: "background.paper" }}>
          <Outlet />
        </Grid>
      </Grid>
      <NavDrawer
        container={container}
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        dashboardItems={dashboardPaths}
        mobileOpen={mobileOpen}
      />
    </>
  );
}
