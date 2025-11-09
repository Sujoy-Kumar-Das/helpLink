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
    <Box sx={{ py: 10, ...sx }} component="section">
      <Container component="div" maxWidth="xl" sx={{ px: { xs: 0, md: 10 } }}>
        {children}
      </Container>
    </Box>
  );
}
