import { Grid, List, ListItem, Typography } from "@mui/material";
import FooterLinkCompo from "./footer/FooterLinkCompo";

export default function FooterInfoLinks() {
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

  return (
    <>
      {footerInfo?.map((item) => (
        <Grid key={item.title} item xs={12} sm={6} md={2} component={"div"}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {item.title}
          </Typography>
          <List dense sx={{ p: 0 }}>
            {item.info.map((link) => (
              <ListItem key={link.href} sx={{ px: 0, py: 0.5 }}>
                <FooterLinkCompo text={link.name} link={link.href} />
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </>
  );
}
