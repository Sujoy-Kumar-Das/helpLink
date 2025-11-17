import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box, Button, Typography } from "@mui/material";

export default function AboutCTA() {
  return (
    <CommonContainer
      sx={{
        textAlign: "center",
        background: "var(--gradient)",
        color: "primary.contrastText",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontStyle: "italic",
            mb: 4,
            opacity: 0.95,
          }}
        >
          "The best way to find yourself is to lose yourself in the service of
          others."
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Join us in creating a brighter future for communities in need
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              px: 6,
              py: 1.5,
            }}
          >
            Donate Now
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              color: "primary.contrastText",
            }}
          >
            Become a Volunteer
          </Button>
        </Box>
      </Box>
    </CommonContainer>
  );
}
