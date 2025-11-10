import { Box } from "@mui/material";
import Link from "next/link";

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 2,
        mr: 4,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          background: "linear-gradient(135deg, #1976D2 0%, #FF9800 100%)",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: "1rem",
          boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
        }}
      >
        HL
      </Box>
      <Box
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          background: "linear-gradient(135deg, #1976D2, #FF9800)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: { xs: "none", sm: "block" },
        }}
      >
        HelpLink
      </Box>
    </Box>
  );
}
