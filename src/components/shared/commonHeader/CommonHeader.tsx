import { Box, Typography } from "@mui/material";

export default function CommonHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        color={"text.primary"}
        variant="h2"
        component="h2"
        textAlign="center"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        textAlign="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
