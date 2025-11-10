import { Box } from "@mui/material";
import CompletedEvents from "./_components/CompletedEvents";
import EventFilter from "./_components/EventFilter";
import Events from "./_components/Events";
import EventsHeader from "./_components/EventsHeader";
import RegisterEvent from "./_components/RegisterEvent";
import UpcomingEvents from "./_components/UpcomingEvents";

export default function EventsPage() {
  return (
    <Box sx={{ py: 0 }}>
      {/* events header */}
      <EventsHeader />

      {/* Event Filters */}
      <EventFilter />

      {/* running events */}
      <Events />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* completed Events  */}
      <CompletedEvents />

      <RegisterEvent />
    </Box>
  );
}
