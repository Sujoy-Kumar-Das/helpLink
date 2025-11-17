import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Executive Director",
    avatar: "/team/sarah-chen.jpg",
    quote: "Every life touched is a story changed forever.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    avatar: "/team/marcus-rodriguez.jpg",
    quote: "Logistics with purpose, impact with precision.",
  },
  {
    name: "Priya Patel",
    role: "Community Outreach Director",
    avatar: "/team/priya-patel.jpg",
    quote: "Building bridges between hearts and needs.",
  },
  {
    name: "David Kim",
    role: "Fundraising Manager",
    avatar: "/team/david-kim.jpg",
    quote: "Turning generosity into lasting change.",
  },
  {
    name: "Elena Popescu",
    role: "Program Director",
    avatar: "/team/elena-popescu.jpg",
    quote: "Designing solutions that empower communities.",
  },
  {
    name: "James Okafor",
    role: "Partnerships Lead",
    avatar: "/team/james-okafor.jpg",
    quote: "Collaboration multiplies our impact exponentially.",
  },
];
export default function OurTeam() {
  return (
    <Box>
      <CommonHeader
        title="Meet Our Team"
        subtitle="Passionate leaders dedicated to creating lasting change"
      />

      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Card
              sx={{
                textAlign: "center",
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={member.avatar}
                alt="User image"
                height={120}
                width={120}
                style={{
                  marginBottom: 3,
                  border: "4px solid",
                  borderColor: "primary.main",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="primary.main"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                {member.role}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
              >
                <Typography
                  component={"span"}
                  fontWeight={900}
                  variant="h3"
                  color={"primary.main"}
                >
                  "
                </Typography>
                {member.quote}

                <Typography
                  component={"span"}
                  fontWeight={900}
                  variant="h3"
                  color={"primary.main"}
                >
                  "
                </Typography>
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
