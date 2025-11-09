import { Email } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
export default function FooterBrandSection() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontWeight: 800,
          background: "linear-gradient(135deg, #90CAF9 0%, #FFB74D 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        HopeLink
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
        Creating lasting change through compassion, action, and community
        empowerment. Together, we build a brighter future for all.
      </Typography>

      {/* Newsletter Subscription */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
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
                color: "white",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#90CAF9",
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #90CAF9 0%, #42A5F5 100%)",
              minWidth: "auto",
              px: 3,
              "&:hover": {
                background: "linear-gradient(135deg, #42A5F5 0%, #90CAF9 100%)",
              },
            }}
          >
            <Email />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
