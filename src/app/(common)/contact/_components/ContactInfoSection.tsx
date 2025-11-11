import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  X,
} from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

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

export default function ContactInfoSection() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Contact Information
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Reach out to us through any of these channels
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {contactInfo.map((info) => (
          <Card
            key={info.title}
            sx={{
              p: 3,
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 3,
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <info.icon sx={{ fontSize: 24 }} />
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {info.details}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                {info.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Social Media */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Follow Our Journey
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Stay updated with our latest impact and stories
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {socialMedia.map((social) => (
            <IconButton
              key={social.name}
              sx={{
                width: 48,
                height: 48,
                bgcolor: "primary.light",
                color: "primary.contrastText",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <social.icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
