import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import RegistrationLayout from "../components/layouts/RegistrationLayout";
import DashBoardLayout from "../components/layouts/dashboard/DashBoardLayout";
import AllDonationsDashboard from "../pages/AllDonationsDashboard";
import CreateDonation from "../pages/CreateDonation";
import Dashboard from "../pages/Dashboard";
import LeaderBoard from "../pages/LeaderBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routesPath } from "./routes.path";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: routesPath,
  },
  {
    path: "/auth",
    element: <RegistrationLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "leader-board", element: <LeaderBoard /> },
      { path: "all-donations", element: <AllDonationsDashboard /> },
      { path: "create-donation", element: <CreateDonation /> },
    ],
  },
]);
