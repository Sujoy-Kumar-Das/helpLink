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
      }}
    >
      Donate Now
    </Button>
  );
}
