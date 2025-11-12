import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box, Button } from "@mui/material";
import VolunteerFeature from "./VolunteerFeature";

export default function VolunteerCTA() {
  return (
    <CommonContainer
      sx={{
        background: "var(--gradient)",
        textAlign: "center",
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <CommonHeader
        title="Join Our Volunteer Community"
        subtitle="Make a hands-on difference in communities around the world. Your time and skills can change lives."
      />

      <VolunteerFeature />

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
          sx={{
            px: 4,
            py: 1.5,
          }}
        >
          Become a Volunteer
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          sx={{
            px: 4,
            py: 1.5,
            color: "primary.contrastText",
          }}
        >
          Learn More
        </Button>
      </Box>
    </CommonContainer>
  );
}
