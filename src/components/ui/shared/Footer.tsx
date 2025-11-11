import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { VolunteerActivism } from "@mui/icons-material";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import FooterBrandSection from "./FooterBrandSection";
import FooterContactInfoList from "./FooterContactInfo";
import FooterInfoLinks from "./FooterInfoLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <CommonContainer
      sx={{
        background: "linear-gradient(135deg, #0A0F1C 0%, #1A2238 100%)",
        color: "white",
        pt: 8,
        pb: 4,
        mt: "auto",
      }}
    >
      {/* Main Footer Content */}
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

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Bottom Footer */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
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
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#90CAF9",
                  },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Trust Badges */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VolunteerActivism sx={{ color: "#4CAF50" }} />
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Verified Non-Profit
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              🔒 Secure Donations
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              ⭐ 4.9/5 Rating
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              🌍 50+ Countries
            </Typography>
          </Box>
        </Box>
      </Box>
    </CommonContainer>
  );
}
