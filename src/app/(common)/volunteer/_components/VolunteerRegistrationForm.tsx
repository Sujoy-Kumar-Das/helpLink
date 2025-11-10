import {
  Campaign,
  Groups,
  LocalShipping,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const volunteerRoles = [
  {
    title: "Field Support",
    description: "Direct community outreach and event coordination",
    icon: <Groups sx={{ fontSize: 40 }} />,
    requirements: ["Communication skills", "Physical ability", "Team player"],
  },
  {
    title: "Fundraising",
    description: "Organize and manage local donation drives",
    icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
    requirements: ["Networking", "Organization", "Persuasion skills"],
  },
  {
    title: "Social Media Advocacy",
    description: "Promote awareness campaigns online",
    icon: <Campaign sx={{ fontSize: 40 }} />,
    requirements: ["Social media savvy", "Content creation", "Engagement"],
  },
  {
    title: "Logistics",
    description: "Coordinate supply distribution and management",
    icon: <LocalShipping sx={{ fontSize: 40 }} />,
    requirements: ["Organization", "Problem-solving", "Attention to detail"],
  },
];

export default function VolunteerRegistrationForm() {
  return (
    <Box id="volunteer-form" sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="md">
        <Card sx={{ p: { xs: 3, md: 6 } }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            Join Our Team
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Start your journey as a volunteer today
          </Typography>

          <Box component="form">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth select>
                  {volunteerRoles.map((role) => (
                    <MenuItem key={role.title} value={role.title}>
                      {role.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth select>
                  <MenuItem value="1-2">1-2 days per week</MenuItem>
                  <MenuItem value="3-4">3-4 days per week</MenuItem>
                  <MenuItem value="weekends">Weekends only</MenuItem>
                  <MenuItem value="flexible">Flexible</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #1E6DC6 0%, #4A90E2 100%)",
                  }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
