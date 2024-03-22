import { Box, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Typography variant="h3" component={"h3"} color={"blue"}>
        Loading....
      </Typography>
    </Box>
  );
}
