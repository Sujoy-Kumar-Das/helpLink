import { Box } from "@mui/material";
import bgImage from "../assets/notfound.png";
export default function NotFound() {
  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img src={bgImage} alt="no found image" style={{ height: "100%" }} />
    </Box>
  );
}
