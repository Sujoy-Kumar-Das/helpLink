import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

export default function CustomContainer({
  children,
  bgColor = true,
  margin = true,
}: {
  children: ReactNode;
  bgColor?: boolean;
  margin?: boolean;
}) {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: `${
          bgColor ? "background.default" : "background.paper"
        }`,
        py: 12,
      }}
      mt={margin ? 10 : 0}
    >
      <Container>{children}</Container>
    </Box>
  );
}
