import CommonContainer from "@/components/shared/contaners/CommonContainer";
import {
  ChildCare,
  LocalHospital,
  LocalLibrary,
  MedicalServices,
  Public,
  VolunteerActivism,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

const partners = [
  { name: "UNICEF", icon: <ChildCare fontSize="large" /> },
  { name: "Red Cross", icon: <MedicalServices fontSize="large" /> },
  { name: "World Vision", icon: <Public fontSize="large" /> },
  { name: "Save the Children", icon: <VolunteerActivism fontSize="large" /> },
  { name: "Oxfam", icon: <LocalLibrary fontSize="large" /> },
  { name: "Doctors Without Borders", icon: <LocalHospital fontSize="large" /> },
];

export default function TrustedPartners() {
  return (
    <CommonContainer
      sx={{ maxWidth: "lg", py: 10, bgcolor: "background.default" }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        color="text.primary"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Trusted by 50+ Global Organizations
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ mt: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {partners.map((partner, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              sx={{
                height: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.paper",
                borderRadius: 2,
                p: 2,
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 4,
                  opacity: 1,
                },
              }}
            >
              <Box sx={{ mb: 1, color: "primary.main" }}>{partner.icon}</Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {partner.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}
