"use client";

import { ReactElement } from "react";
import { ThemeContextProvider } from "./ThemeContextProvider";

export function Provider({ children }: { children: ReactElement }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
