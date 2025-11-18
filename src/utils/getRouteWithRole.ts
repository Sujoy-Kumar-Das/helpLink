import { IDashboardRoute } from "@/interface/dashboard.routes.interface";
import { IUserRole } from "@/interface/user.interface";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IRoute {
  link: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
}
const getRoutesWithRole = (
  routes: IRoute[],
  role: IUserRole[]
): IDashboardRoute[] => {
  return routes.map((route) => ({ access: role, ...route }));
};

export default getRoutesWithRole;
