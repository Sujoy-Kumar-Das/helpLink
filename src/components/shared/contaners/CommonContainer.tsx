import { Box, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

export default function CommonContainer({
  children,
  sx,
}: {
  sx?: SxProps;
  children: ReactNode;
}) {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 0 }, py: 16, ...sx }}>
      <Container component="div" maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
}
