import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ISortOption {
  id: string;
  label: string;
  value: string;
  icon?:
    | (OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
      })
    | undefined;
}

export interface ICheckFilterOption {
  id: string;
  label: string;
  value: string;
}
