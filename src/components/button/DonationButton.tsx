import { Button } from "@mui/material";
import Link from "next/link";

export default function DonationButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      href="/donate"
      sx={{
        borderRadius: 3,
        px: 4,
        py: 1.5,
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "0 8px 25px rgba(25, 118, 210, 0.3)",
        background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transition: "left 0.5s",
        },
        "&:hover::before": {
          left: "100%",
        },
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 12px 35px rgba(25, 118, 210, 0.4)",
        },
        "&:active": {
          transform: "translateY(0)",
        },
      }}
    >
      Donate Now
    </Button>
  );
}
