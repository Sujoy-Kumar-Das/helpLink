import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import {
  ArrowForward,
  Campaign,
  Groups,
  LocalShipping,
  VolunteerActivism,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
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

export default function VolunteerOpportunities() {
  return (
    <CommonContainer sx={{ bgcolor: "background.default", py: 8 }}>
      <CommonHeader
        title="Volunteer Opportunities"
        subtitle="Find the perfect role that matches your skills and interests"
      />

      <Grid container spacing={4}>
        {volunteerRoles.map((role, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: "#1E6DC6",
                      color: "primary.main",
                      mr: 3,
                    }}
                  >
                    {role.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={600}>
                    {role.title}
                  </Typography>
                </Box>

                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  {role.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Key Requirements:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {role.requirements.map((req, idx) => (
                      <Chip
                        key={idx}
                        label={req}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "primary.main",
                          color: "primary.main",
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Button
                  variant="outlined"
                  endIcon={<ArrowForward />}
                  sx={{ mt: "auto" }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
