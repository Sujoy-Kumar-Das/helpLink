import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Diversity3, Favorite, Visibility } from "@mui/icons-material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Box, Card, Grid, Typography } from "@mui/material";

// Core values
const coreValues = [
  {
    icon: Favorite,
    title: "Compassion",
    description:
      "We lead with empathy and understanding, putting human dignity at the center of everything we do.",
  },
  {
    icon: Visibility,
    title: "Transparency",
    description:
      "Every donation, every decision, every outcome is openly shared with our supporters and communities.",
  },
  {
    icon: PsychologyIcon,
    title: "Innovation",
    description:
      "We continuously evolve our approaches to solve complex social challenges effectively.",
  },
  {
    icon: Diversity3,
    title: "Collaboration",
    description:
      "We believe in the power of partnership and work closely with local communities and organizations.",
  },
];

export default function OurCoreValues() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Our Core Values"
        subtitle="The principles that guide every decision and action we take"
      />

      <Grid container spacing={4}>
        {coreValues.map((value, index) => (
          <Grid item xs={12} md={6} key={value.title}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    mr: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <value.icon sx={{ fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
