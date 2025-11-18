import Logo from "@/components/logo/Logo";
import {
  Dashboard as DashboardIcon,
  AttachMoney as DonationsIcon,
  People as PeopleIcon,
  BarChart as ReportsIcon,
  Settings as SettingsIcon,
  VolunteerActivism as VolunteerIcon,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function DashboardSidebarLinks() {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Logo />
      <Divider />
      <List>
        {[
          "Dashboard",
          "Users",
          "Volunteers",
          "Donations",
          "Reports",
          "Settings",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              selected={activePage === text}
              onClick={() => {
                setActivePage(text);
                setSearchQuery("");
                setFilterStatus("All");
                if (isMobile) handleDrawerToggle();
              }}
              sx={{
                borderRadius: 1,
                mx: 1,
                my: 0.5,
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: activePage === text ? "white" : "inherit",
                }}
              >
                {text === "Dashboard" && <DashboardIcon />}
                {text === "Users" && <PeopleIcon />}
                {text === "Volunteers" && <VolunteerIcon />}
                {text === "Donations" && <DonationsIcon />}
                {text === "Reports" && <ReportsIcon />}
                {text === "Settings" && <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
