import Logo from "@/components/logo/Logo";
import { Email } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
export default function FooterBrandSection() {
  return (
    <Box sx={{ mb: 3 }}>
      <Logo />
      <Typography
        variant="body1"
        sx={{ my: 3, opacity: 0.8, lineHeight: 1.6, color: "text.secondary" }}
      >
        Creating lasting change through compassion, action, and community
        empowerment. Together, we build a brighter future for all.
      </Typography>

      {/* Newsletter Subscription */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, color: "text.primary" }}>
          Stay Updated
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              "& .MuiOutlinedInput-root": {
                color: "text.secondary",
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              minWidth: "auto",
              p: 1,
            }}
          >
            <Email />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
