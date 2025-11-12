import isActiveLink from "@/utils/isActiveLink";
import { Box, SxProps, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type INavLinksProps = {
  sx?: SxProps;
};

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavLinks({ sx }: INavLinksProps) {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flex: 1,
        justifyContent: "center",
        ...sx,
      }}
    >
      {navigationItems.map((item) => (
        <Typography
          key={item.label}
          component={Link}
          href={item.href}
          sx={{
            color: isActiveLink(item.href, pathname)
              ? "primary.main"
              : "text.primary",
            fontWeight: isActiveLink(item.href, pathname) ? 600 : 500,
            fontSize: 16,
            textDecoration: "none",
            px: 3,
            py: 1,
            position: "relative",
            borderRadius: 3,
            minWidth: "auto",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 4,
              left: "50%",
              transform: isActiveLink(item.href, pathname)
                ? "translateX(-50%) scaleX(1)"
                : "translateX(-50%) scaleX(0)",
              width: "60%",
              height: 2,
              background: "linear-gradient(90deg, #1976D2, #4ADE80)",
              borderRadius: 2,
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            },
            "&:hover": {
              background: "primary.main",
              transform: "translateY(-1px)",
              "&::after": {
                transform: "translateX(-50%) scaleX(1)",
              },
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
}
