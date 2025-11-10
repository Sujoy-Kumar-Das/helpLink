import { Drawer } from "@mui/material";
import MobileMenu from "./MobileMenu";

interface NavDrawerProps {
  open: boolean;
  onDrawerToggle: () => void;
}

export default function NavDrawer({ open, onDrawerToggle }: NavDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          border: "none",
          background: "transparent",
        },
      }}
    >
      <MobileMenu onDrawerToggle={onDrawerToggle} />
    </Drawer>
  );
}
