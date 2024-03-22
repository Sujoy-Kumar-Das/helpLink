import { Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/shared/navbar/Navbar";

export default function RegistrationLayout() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Outlet />
    </>
  );
}
