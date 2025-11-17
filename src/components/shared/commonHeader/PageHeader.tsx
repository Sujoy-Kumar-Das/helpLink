"use client";
import getPathArray from "@/utils/pathLinksArray";
import { Home, NavigateNext } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  SxProps,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
interface PageHeaderProps {
  title: string;
  subtitle: string;
  sx?: SxProps;
  children?: ReactElement;
}

const PageHeader = ({ title, subtitle, sx, children }: PageHeaderProps) => {
  const pathName = usePathname();

  const pathNamesArray = getPathArray(pathName);
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        background: "var(--gradient)",
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
            fontWeight: 400,
            textAlign: "center",
            color: "text.secondary",
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            href="/"
            component={Link}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "text.secondary",
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

        {children && children}
      </Container>
    </Box>
  );
};

export default PageHeader;
