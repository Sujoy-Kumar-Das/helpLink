"use client";

import { ThemeContext } from "@/contexts";
import { useContext } from "react";

export default function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("You are using ThemeContext outside of the provider.");
  }

  return { ...context };
}
