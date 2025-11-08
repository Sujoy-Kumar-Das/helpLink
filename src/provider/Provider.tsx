"use client";

import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <Box sx={{ backgroundColor: "background.default" }}>
        <RouterProvider router={routes} />
      </Box>
    </ThemeProvider>
  );
}
