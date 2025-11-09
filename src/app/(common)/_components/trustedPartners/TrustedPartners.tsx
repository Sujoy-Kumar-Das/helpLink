import { Box, Container, Grid, Typography } from "@mui/material";

const partners = [
  { name: "UNICEF", logo: "/partners/unicef.svg" },
  { name: "Red Cross", logo: "/partners/red-cross.svg" },
  { name: "World Vision", logo: "/partners/world-vision.svg" },
  { name: "Save the Children", logo: "/partners/save-children.svg" },
  { name: "Oxfam", logo: "/partners/oxfam.svg" },
  { name: "Doctors Without Borders", logo: "/partners/doctors.svg" },
];

export default function TrustedPartners() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          gutterBottom
          sx={{ fontWeight: 500 }}
        >
          Trusted by 50+ Global Organizations
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ mt: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          {partners.map((partner, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "scale(1.05)",
                  },
                }}
              >
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
      </Container>
    </Box>
  );
}
