import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavTitle() {
  return (
    <Link to={"/"}>
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
