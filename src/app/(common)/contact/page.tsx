// app/contact/page.tsx
"use client";

import PageHeader from "@/components/shared/commonHeader/PageHeader";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
  X,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import FaqSection from "./_components/FaqSection";
import OfficeLocation from "./_components/OfficeLocation";
import ContactUsForm from "./_components/ContactUs";
import ContactUs from "./_components/ContactUs";

// FAQ data
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

// Contact information
const contactInfo = [
  {
    icon: LocationOn,
    title: "Our Office",
    details: "123 Hope Avenue\nSan Francisco, CA 94102\nUnited States",
    description: "Visit us during business hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-HOPE\n+1 (555) 123-4673",
    description: "Mon-Fri from 8am to 6pm PST",
  },
  {
    icon: Email,
    title: "Email Us",
    details: "info@hopelink.org\nsupport@hopelink.org",
    description: "We reply within 24 hours",
  },
];

// Social media links
const socialMedia = [
  { icon: Facebook, name: "Facebook", url: "https://facebook.com/hopelink" },
  { icon: Instagram, name: "Instagram", url: "https://instagram.com/hopelink" },
  {
    icon: LinkedIn,
    name: "LinkedIn",
    url: "https://linkedin.com/company/hopelink",
  },
  { icon: X, name: "X", url: "https://twitter.com/hopelink" },
];

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
      // Clear error when user starts typing
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSnackbarOpen(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 0 }}>
      {/* header Section */}

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

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{
            width: "100%",
            animation: "bounceIn 0.6s ease-out",
            "@keyframes bounceIn": {
              "0%": { opacity: 0, transform: "scale(0.3)" },
              "50%": { opacity: 1, transform: "scale(1.05)" },
              "70%": { transform: "scale(0.9)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            🎉 Message Sent!
          </Typography>
          <Typography>
            We'll get back to you within 24 hours. Thank you for reaching out!
          </Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}
