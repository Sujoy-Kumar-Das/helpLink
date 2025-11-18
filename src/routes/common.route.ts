import { USER_ROLE } from "@/constants/user.role";
import getRoutesWithRole, { IRoute } from "@/utils/getRouteWithRole";
import { Dashboard, Settings } from "@mui/icons-material";

const commonDashboardRoutes: IRoute[] = [
  {
    link: "/dashboard",
    text: "Dashboard",
    icon: Dashboard,
  },
  {
    link: "/setting",
    text: "Setting",
    icon: Settings,
  },
];

const commonRoutes = getRoutesWithRole(
  commonDashboardRoutes,
  Object.values(USER_ROLE)
);

export const commonRoutesPaths = commonRoutes.map((route) => route.link);

export default commonRoutes;
