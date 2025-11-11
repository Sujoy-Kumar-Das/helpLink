import PageHeader from "@/components/shared/commonHeader/PageHeader";
import { Box, Button } from "@mui/material";
export default function AboutPageHeader() {
  return (
    <PageHeader
      title="Together, We Make Hope Happen"
      subtitle="Empowering communities through sustainable solutions in education,
              healthcare, and economic development."
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="info"
          sx={{
            px: 4,
            py: 1.5,
          }}
        >
          Join as Volunteer
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{
            px: 4,
            py: 1.5,
          }}
        >
          Donate Now
        </Button>
      </Box>
    </PageHeader>
  );
}
