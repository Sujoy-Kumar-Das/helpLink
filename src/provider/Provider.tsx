"use client";

import { ReactNode } from "react";
import { ThemeContextProvider } from "./ThemeContextProvider";

export function Provider({ children }: { children: ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
