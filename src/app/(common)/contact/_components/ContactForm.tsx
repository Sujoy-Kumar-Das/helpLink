"use client";
import { Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactForm() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 6 },
        border: "1px solid",
        borderColor: "grey.200",
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Send us a Message
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Fill out the form below and we'll get back to you as soon as possible
      </Typography>

      <Box component="form">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" type="email" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth select label="Subject">
              <MenuItem value="">Select a subject</MenuItem>
              <MenuItem value="General Inquiry">General Inquiry</MenuItem>
              <MenuItem value="Partnership">Partnership</MenuItem>
              <MenuItem value="Volunteer">Volunteer</MenuItem>
              <MenuItem value="Technical Support">Technical Support</MenuItem>
              <MenuItem value="Donation Question">Donation Question</MenuItem>
              <MenuItem value="Media Inquiry">Media Inquiry</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={6}
              label="Your Message"
              placeholder="Tell us how we can help you..."
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<Send />}
              sx={{
                px: 4,
                py: 1.5,
                minWidth: 200,
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
