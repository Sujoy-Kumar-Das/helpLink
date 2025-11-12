import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Email } from "@mui/icons-material";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

export default function NewsletterSection() {
  return (
    <CommonContainer sx={{ py: 10, bgcolor: "background.default" }}>
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          maxWidth: "md",
          mx: "auto",
          borderRadius: 4,
          background: "var(--gradient)",
        }}
      >
        <Email sx={{ fontSize: 60, color: "primary.main", mb: 3 }} />

        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          color="primary.main"
        >
          Stay Connected
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "500px", mx: "auto" }}
        >
          Get updates on how your help changes lives and learn about new
          opportunities to make a difference
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              placeholder="Enter your email address"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "background.paper",
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" size="large" fullWidth>
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          ✨ Join 50,000+ subscribers. We respect your privacy and never spam.
        </Typography>
      </Paper>
    </CommonContainer>
  );
}
