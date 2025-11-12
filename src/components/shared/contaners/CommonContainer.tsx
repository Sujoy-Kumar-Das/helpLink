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
    <Box component="section">
      <Container
        component="div"
        maxWidth="xl"
        sx={{ px: { xs: 2, md: 10 }, py: 16, ...sx }}
      >
        {children}
      </Container>
    </Box>
  );
}
