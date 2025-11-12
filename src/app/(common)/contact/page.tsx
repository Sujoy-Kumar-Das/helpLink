import PageHeader from "@/components/shared/commonHeader/PageHeader";
import { Box } from "@mui/material";
import ContactUs from "./_components/ContactUs";
import FaqSection from "./_components/FaqSection";
import OfficeLocation from "./_components/OfficeLocation";

export default function ContactPage() {
  return (
    <Box sx={{ py: 0 }}>
      <PageHeader
        title="Get in Touch with HopeLink"
        subtitle="We'd love to hear from you. Whether you want to volunteer, donate, or partner with us — our team is ready to help."
      />

      {/* Contact us form */}
      <ContactUs />

      {/* office location Section */}
      <OfficeLocation />

      {/* FAQ Section */}
      <FaqSection />
    </Box>
  );
}
