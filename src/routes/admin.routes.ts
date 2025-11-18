import { USER_ROLE } from "@/constants/user.role";
import getRoutesWithRole, { IRoute } from "@/utils/getRouteWithRole";
import {
  AttachMoney,
  BarChart,
  People,
  VolunteerActivism,
} from "@mui/icons-material";

const adminDashboardRoutes: IRoute[] = [
  {
    link: "/user",
    text: "User",
    icon: People,
  },
  {
    link: "/volunteer",
    text: "Volunteer",
    icon: VolunteerActivism,
  },
  {
    link: "/donation",
    text: "Donation",
    icon: AttachMoney,
  },
  {
    link: "/report",
    text: "Report",
    icon: BarChart,
  },
];

const adminRoutes = getRoutesWithRole(adminDashboardRoutes, [
  USER_ROLE.admin,
  USER_ROLE.superAdmin,
]);

export default adminRoutes;
