"use client";
import getPathArray from "@/utils/pathLinksArray";
import { Home, NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, SxProps, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface PageHeaderProps {
  title: string;
  subtitle: string;
  sx?: SxProps;
}

const PageHeader = ({ title, subtitle, sx }: PageHeaderProps) => {
  const pathName = usePathname();

  const pathNamesArray = getPathArray(pathName);
  return (
    <Box
      sx={{
        py: 8,
        borderBottom: `1px solid`,
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 3, md: 10 },
          maxWidth: "xl",
          ...sx,
        }}
      >
        {/* Title */}
        <Typography
          variant={"h2"}
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.contrastText",
            textAlign: "left",
            mb: 4,
          }}
        >
          {title}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant={"body1"}
          color={"primary.contrastText"}
          sx={{
            textAlign: "left",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>

        <Breadcrumbs
          separator={
            <NavigateNext
              fontSize="small"
              sx={{ color: "primary.contrastText" }}
            />
          }
          sx={{
            mt: 1,
            "& .MuiBreadcrumbs-ol": {
              justifyContent: "flex-start",
            },
          }}
        >
          <Typography
            href="/"
            component={Link}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "primary.contrastText",
            }}
          >
            <Home sx={{ mr: 0.5, fontSize: "1rem" }} />
            Home
          </Typography>
          {pathNamesArray.map((item) => (
            <Typography
              component={Link}
              key={item.id}
              href={item.link}
              sx={{
                textDecoration: "none",
                color: "primary.contrastText",
                textTransform: "capitalize",
              }}
            >
              {item.text}
            </Typography>
          ))}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default PageHeader;
