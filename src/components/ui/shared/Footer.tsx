import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Lock, Public, Star, VolunteerActivism } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import FooterContactInfoList from "./FooterContactInfo";
import FooterInfoLinks from "./FooterInfoLinks";
import FooterBrandSection from "./FooterBrandSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const trustBadges = [
    {
      icon: <VolunteerActivism sx={{ color: "primary.main" }} />,
      label: "Verified Non-Profit",
    },
    {
      icon: <Lock sx={{ color: "primary.main" }} />,
      label: "Secure Donations",
    },
    {
      icon: <Star sx={{ color: "primary.main" }} />,
      label: "4.9/5 Rating",
    },
    {
      icon: <Public sx={{ color: "primary.main" }} />,
      label: "50+ Countries",
    },
  ];

  return (
    <CommonContainer
      sx={{
        background: "var(--gradient)",
        pt: 8,
        pb: 4,
      }}
    >
      <Grid container spacing={6}>
        {/* Brand Column */}
        <Grid item xs={12} md={4}>
          <FooterBrandSection />
        </Grid>

        <FooterInfoLinks />

        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <FooterContactInfoList />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "var(--gradient)" }} />

      {/* Bottom Footer */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            sx={{ opacity: 0.7, color: "text.secondary" }}
          >
            © {currentYear} HopeLink. All rights reserved. Making the world a
            better place, one act of kindness at a time.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { md: "flex-end" },
            }}
          >
            {legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ textDecoration: "none" }}
              >
                <Typography sx={{ color: "text.secondary" }} variant="body2">
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: "var(--gradient)" }} />

      {/*  Trust Badges  */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            alignItems: "center",
          }}
        >
          {trustBadges.map((badge, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                opacity: 0.9,
              }}
            >
              {badge.icon}
              <Typography variant="body2" color={"text.secondary"}>
                {badge.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </CommonContainer>
  );
}
