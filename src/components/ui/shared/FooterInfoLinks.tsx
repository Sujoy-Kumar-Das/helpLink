import { Grid, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Campaigns", href: "/campaigns" },
  { name: "Impact Stories", href: "/stories" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Careers", href: "/careers" },
  { name: "Financials", href: "/financials" },
];

const resources = [
  { name: "Blog & News", href: "/blog" },
  { name: "Annual Reports", href: "/reports" },
  { name: "Press Kit", href: "/press" },
  { name: "Partnerships", href: "/partners" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
];

const footerInfo = [
  {
    title: "Quick Links",
    info: quickLinks,
  },
  {
    title: "Resource",
    info: resources,
  },
];

export default function FooterInfoLinks() {
  return (
    <>
      {footerInfo?.map((item) => (
        <Grid key={item.title} item xs={12} sm={6} md={2} component={"div"}>
          <Typography
            variant="h6"
            sx={{ mb: 3, fontWeight: 600, color: "text.primary" }}
          >
            {item.title}
          </Typography>
          <List dense sx={{ p: 0 }}>
            {item.info.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <ListItem sx={{ px: 0, py: 0.5, color: "text.secondary" }}>
                  {link.name}
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
      ))}
    </>
  );
}
