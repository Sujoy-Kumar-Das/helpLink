import { Email } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function NewsletterSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(255, 152, 0, 0.05))",
            border: "1px solid rgba(25, 118, 210, 0.1)",
            borderRadius: 4,
          }}
        >
          <Email sx={{ fontSize: 60, color: "primary.main", mb: 3 }} />

          <Typography variant="h3" component="h2" gutterBottom color="primary">
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
                size="large"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "background.paper",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  height: "56px",
                  fontWeight: 600,
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            ✨ Join 50,000+ subscribers. We respect your privacy and never spam.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
