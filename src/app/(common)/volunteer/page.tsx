import { Box } from "@mui/material";
import ImpactMetricsList from "../_components/impactMetricsSection/MetricsList";
import JoinAsVolunteer from "./_components/JoinAsVolunteer";
import VolunteerHeader from "./_components/VolunteerHeader";
import VolunteerOpportunities from "./_components/VolunteerOpportunities";
import VolunteerRegistrationForm from "./_components/VolunteerRegistrationForm";
import VolunteerStories from "./_components/VolunteerStoryies";
import VolunteerTestimonials from "./_components/VolunteerTestimonials";

export default function VolunteersPage() {
  return (
    <Box component={"section"}>
      {/* volunteer header */}
      <VolunteerHeader />

      {/* Impact Stats */}
      <ImpactMetricsList />

      {/* Volunteer opportunities */}
      <VolunteerOpportunities />

      {/* Volunteer Stories */}
      <VolunteerStories />

      {/* Registration Form */}
      <VolunteerRegistrationForm />

      {/* Testimonials */}
      <VolunteerTestimonials />
      {/* CTA Footer */}

      <JoinAsVolunteer />
    </Box>
  );
}
