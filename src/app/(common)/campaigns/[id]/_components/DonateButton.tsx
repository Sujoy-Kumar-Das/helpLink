"use client";
import { VolunteerActivism } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DonateButton() {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      startIcon={<VolunteerActivism />}
      //   onClick={handleDonateClick}
      //   disabled={isDonating}
      sx={{
        mb: 2,
        py: 1.5,
        fontWeight: 600,
        borderRadius: 2,
        textTransform: "none",
      }}
    >
      Donate Now
    </Button>
  );
}
