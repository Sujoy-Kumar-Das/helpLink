import { Box, Typography } from "@mui/material";

type THeader = {
  title: string;
  subTitle: string;
};

export default function Header({ title, subTitle }: THeader) {
  return (
    <Box
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1200"
      component={"header"}
      sx={{ textAlign: "center", mb: 8 }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        color={"text.primary"}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
        color={"text.secondary"}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}
