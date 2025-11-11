import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Grid } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";

export default function ContactUs() {
  return (
    <CommonContainer sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <ContactInfoSection />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ContactForm />
        </Grid>
      </Grid>
    </CommonContainer>
  );
}
