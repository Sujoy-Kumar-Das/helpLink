"use client";
import { Box, Chip, Container } from "@mui/material";

// Mock Data
const eventCategories = [
  "All",
  "Fundraising",
  "Awareness",
  "Community",
  "Education",
  "Health",
];
export default function EventFilter() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {eventCategories.map((category) => (
          <Chip
            key={category}
            label={category}
            variant={"outlined"}
            color={"default"}
            sx={{
              px: 2,
              py: 2,
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
