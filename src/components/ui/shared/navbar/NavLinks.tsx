import { Box, Button } from "@mui/material";
import Link from "next/link";
import { TDashboardPath, TRoutesItem } from "../../../../types";
import Divider from "../Divider";

type TNavLinks = {
  navItems: TRoutesItem[];
  dashboard?: boolean;
  dashboardItems?: TDashboardPath[] | undefined;
};
export default function NavLinks({
  navItems,
  dashboard,
  dashboardItems,
}: TNavLinks) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: `${dashboard ? "column" : "row"}` },
        alignItems: "center",
      }}
    >
      {/* mapping for dashboard */}
      {dashboard && (
        <>
          {dashboardItems?.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                sx={{
                  color: "text.primary",
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Divider />
        </>
      )}

      {/* mapping for navbar */}

      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <Button sx={{ color: "text.primary" }}>{item.name}</Button>
        </Link>
      ))}
    </Box>
  );
}
