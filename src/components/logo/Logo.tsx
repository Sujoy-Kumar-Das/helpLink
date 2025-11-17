import { VolunteerActivism } from "@mui/icons-material";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} style={{ textDecoration: "none" }}>
      <Box
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
            background: "var(--gradient)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "primary.contrastText",
            p: 3,
          }}
        >
          <VolunteerActivism
            sx={{
              fontSize: 30,
              color: "text.primary",
            }}
          />
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
    </Link>
  );
}
