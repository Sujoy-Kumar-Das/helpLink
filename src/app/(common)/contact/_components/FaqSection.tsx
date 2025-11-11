import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const faqData = [
  {
    question: "How can I volunteer with HopeLink?",
    answer:
      "We welcome volunteers in various capacities including field work, fundraising, and administrative support. You can apply through our volunteer form on this page or email volunteers@hopelink.org for more information.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "85% of every donation directly funds our programs, 10% supports operational costs, and 5% goes toward future initiatives. We maintain full transparency and provide detailed annual reports on our website.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, HopeLink is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You'll receive a receipt for tax purposes immediately after your donation.",
  },
  {
    question: "Can I organize an event for HopeLink?",
    answer:
      "Absolutely! We love community-driven initiatives. Contact our partnerships team at events@hopelink.org, and we'll provide support, materials, and guidance to make your event successful.",
  },
  {
    question: "How can my company partner with HopeLink?",
    answer:
      "We offer various corporate partnership opportunities including employee volunteering, matching gift programs, and cause-related marketing. Reach out to partnerships@hopelink.org to discuss collaboration.",
  },
];

export default function FaqSection() {
  return (
    <CommonContainer sx={{ maxWidth: "lg", mx: "auto", py: 8 }}>
      <CommonHeader
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions"
      />

      <Box>
        {faqData.map((faq, index) => (
          <Accordion
            key={faq.question}
            sx={{
              mb: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "grey.200",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                margin: "16px 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                fontWeight: 600,
                "& .MuiAccordionSummary-content": {
                  my: 2,
                },
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" lineHeight={1.7}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </CommonContainer>
  );
}
