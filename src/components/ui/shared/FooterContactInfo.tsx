import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const socialLinks = [
  {
    icon: <Facebook />,
    name: "Facebook",
    href: "https://facebook.com/hopelink",
  },
  {
    icon: <Twitter />,
    name: "Twitter",
    href: "https://twitter.com/hopelink",
  },
  {
    icon: <Instagram />,
    name: "Instagram",
    href: "https://instagram.com/hopelink",
  },
  {
    icon: <LinkedIn />,
    name: "LinkedIn",
    href: "https://linkedin.com/company/hopelink",
  },
  {
    icon: <YouTube />,
    name: "YouTube",
    href: "https://youtube.com/hopelink",
  },
];

export default function FooterContactInfoList() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: 600, color: "text.primary" }}
      >
        Get In Touch
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LocationOn sx={{ mr: 2, color: "primary.main", opacity: 0.8 }} />
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, color: "text.secondary" }}
          >
            123 Hope Street
            <br />
            Compassion City, CC 12345
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Phone sx={{ mr: 2, color: "primary.main", opacity: 0.8 }} />
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, color: "text.secondary" }}
          >
            +1 (555) 123-4567
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Email sx={{ mr: 2, color: "primary.main", opacity: 0.8 }} />
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, color: "text.secondary" }}
          >
            info@hopelink.org
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
        >
          Follow Us
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {socialLinks.map((social) => (
            <Link href={social.href} key={social.href} target="_blank">
              <IconButton
                sx={{
                  color: "text.primary",
                  border: "1px solid",
                  borderColor: "primary.main",
                  "&:hover": {
                    color: "text.secondary",
                    borderColor: "primary.light",
                    backgroundColor: "primary.main",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {social.icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
}
