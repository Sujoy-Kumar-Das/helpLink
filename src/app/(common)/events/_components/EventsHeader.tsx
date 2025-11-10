import PageHeader from "@/components/shared/commonHeader/PageHeader";
import { Box, Button } from "@mui/material";

export default function EventsHeader() {
  return (
    <PageHeader
      title="Join Our Community Events"
      subtitle="Participate in events that create a real-world impact. Connect, contribute, and make a difference together."
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
          Register for Event
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
          See Volunteer Opportunities
        </Button>
      </Box>
    </PageHeader>
  );
}
