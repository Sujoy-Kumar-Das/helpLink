import { Box, Typography } from "@mui/material";
import image from "../../assets/about.webp";
import CustomContainer from "../ui/shared/CustomContainer";
import Header from "../ui/shared/Header";
export default function AboutHome() {
  return (
    <CustomContainer>
      <Header
        title="About Our Mission"
        subTitle="Discover How We're Making a Difference in Simple Ways"
      />

      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 8,
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          component={"div"}
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <Typography
            component={"h1"}
            variant="h3"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            color={"text.primary"}
          >
            We are HelpLink charity foundation.
          </Typography>
          <Typography
            component={"p"}
            variant="body1"
            my={2}
            color={"text.secondary"}
          >
            At HelpLink Charity Foundation, we are dedicated to making a
            difference in the lives of those in need. With compassion as our
            guiding principle, we strive to uplift communities and individuals
            facing adversity. Through our various programs and initiatives, we
            provide essential resources, support, and opportunities for growth.
            Our volunteers and donors are the heart and soul of our
            organization, embodying the spirit of generosity and kindness.
            Together, we are working towards a brighter future, one act of
            kindness at a time. Join us in spreading love and hope to those who
            need it most.
          </Typography>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          sx={{ width: { xs: "100%", md: "50%" } }}
        >
          <img src={image} alt="" style={{ width: "100%" }} />
        </Box>
      </Box>
    </CustomContainer>
  );
}
