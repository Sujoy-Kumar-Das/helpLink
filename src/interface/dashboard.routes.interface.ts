import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IUserRole } from "./user.interface";

export interface IDashboardRoute {
  text: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  access?: IUserRole[];
}
