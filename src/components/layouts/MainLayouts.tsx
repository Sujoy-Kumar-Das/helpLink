import { Box, Toolbar } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../ui/shared/Footer";
import Navbar from "../ui/shared/navbar/Navbar";

AOS.init();

export default function MainLayouts() {
  useEffect(() => {
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box component="main" sx={{ overflow: "hidden" }}>
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
