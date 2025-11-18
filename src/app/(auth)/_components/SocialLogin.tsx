import { Facebook, Google, Twitter } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export default function SocialLogin() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Google />}
        sx={{
          borderRadius: 3,
          borderColor: "divider",
        }}
      >
        Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Facebook />}
        sx={{
          borderRadius: 3,
          borderColor: "divider",
        }}
      >
        Facebook
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<Twitter />}
        sx={{
          borderRadius: 3,
          borderColor: "divider",
        }}
      >
        Twitter
      </Button>
    </Box>
  );
}
