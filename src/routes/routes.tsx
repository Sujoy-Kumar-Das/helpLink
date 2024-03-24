import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import RegistrationLayout from "../components/layouts/RegistrationLayout";
import DashBoardLayout from "../components/layouts/dashboard/DashBoardLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import { dashboardRoutes } from "./dashboard.routes";
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
    children: dashboardRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
