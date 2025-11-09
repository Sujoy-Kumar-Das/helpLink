import { Button } from "@mui/material";
import Link from "next/link";
export default function NavTitle() {
  return (
    <Link href={"/"}>
      <Button
        sx={{
          color: "text.primary",
          fontSize: "20px",
        }}
      >
        HopeLink
      </Button>
    </Link>
  );
}
