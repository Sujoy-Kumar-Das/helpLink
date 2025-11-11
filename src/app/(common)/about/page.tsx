import { Box } from "@mui/material";
import AboutCTA from "./_components/AboutCTA";
import AboutPageHeader from "./_components/AboutPageHeader";
import OurCoreValues from "./_components/OurCoreValues";
import OurImpact from "./_components/OurImpact";
import OurJourney from "./_components/OurJourney";
import OurMission from "./_components/OurMission";
import OurTeam from "./_components/OurTeam";

export default function AboutPage() {
  return (
    <Box sx={{ py: 0 }}>
      {/* Hero Section */}
      <AboutPageHeader />

      {/* Mission Section */}
      <OurMission />

      {/* Impact section */}
      <OurImpact />

      {/* our journey Section */}
      <OurJourney />

      {/* our team section */}
      <OurTeam />

      {/* Core Values */}
      <OurCoreValues />

      {/* about CTA */}

      <AboutCTA />
    </Box>
  );
}
