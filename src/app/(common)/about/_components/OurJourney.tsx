import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import {
  Diversity3,
  LocalHospital,
  Public,
  School,
  WaterDrop,
} from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";

const timelineData = [
  {
    year: "2018",
    title: "HopeLink Founded",
    description:
      "Started with a mission to provide clean water to rural communities",
    icon: <WaterDrop />,
  },
  {
    year: "2019",
    title: "First Major Initiative",
    description: "Launched education programs reaching 5,000+ children",
    icon: <School />,
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded operations to 15 countries across 3 continents",
    icon: <Public />,
  },
  {
    year: "2021",
    title: "Healthcare Integration",
    description: "Integrated health services into our community programs",
    icon: <LocalHospital />,
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description:
      "Launched mobile platforms to connect donors directly with causes",
    icon: <Diversity3 />,
  },
];

export default function OurJourney() {
  return (
    <CommonContainer sx={{ py: 8 }}>
      <CommonHeader
        title="Our Journey"
        subtitle="Milestones that shaped our mission and expanded our impact"
      />

      <Box sx={{ position: "relative", maxWidth: "md", mx: "auto" }}>
        <Box
          sx={{
            position: "absolute",
            left: { xs: 20, md: "50%" },
            top: 0,
            bottom: 0,
            width: "2px",
            bgcolor: "primary.main",
            transform: { xs: "none", md: "translateX(-1px)" },
            zIndex: -100,
          }}
        />

        {timelineData.map((item, index) => (
          <Box
            key={item.year}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 6,
              zIndex: 200,
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              textAlign: {
                xs: "center",
                md: index % 2 === 0 ? "right" : "left",
              },
            }}
          >
            <Box
              sx={{
                minWidth: { xs: "auto", md: 120 },
                textAlign: {
                  xs: "center",
                  md: index % 2 === 0 ? "right" : "left",
                },
                mb: { xs: 2, md: 0 },
                order: { xs: 1, md: index % 2 === 0 ? 1 : 3 },
              }}
            >
              <Typography variant="h4" fontWeight={700} color="primary.main">
                {item.year}
              </Typography>
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                mx: { xs: 0, md: 4 },
                mb: { xs: 2, md: 0 },
                order: { xs: 2, md: 2 },
                position: "relative",
                zIndex: 1,
              }}
            >
              {item.icon}
            </Box>

            <Box
              sx={{
                flex: 1,
                order: { xs: 3, md: index % 2 === 0 ? 3 : 1 },
                mb: { xs: 0, md: 0 },
              }}
            >
              <Card
                sx={{
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Card>
            </Box>
          </Box>
        ))}
      </Box>
    </CommonContainer>
  );
}
