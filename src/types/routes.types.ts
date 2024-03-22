import { ReactNode } from "react";

export type TRoutesItem = {
  name: string;
  path: string;
  element?: ReactNode;
};
