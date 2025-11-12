/* eslint-disable @typescript-eslint/no-explicit-any */
import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Image from "next/image";
// todo add news type
export default function NewsCard({ news }: { news: any }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image width={200} height={200} src={news.image} alt={news.title} />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={news.category}
            color="primary"
            size="small"
            sx={{ mb: 1 }}
          />
        </Box>

        <Typography
          variant="h5"
          component="h3"
          color={"text.primary"}
          gutterBottom
        >
          {news.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {news.excerpt}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {news.date} <CircleIcon sx={{ fontSize: 8 }} /> {news.readTime}
          </Typography>
          <Button variant="text" color="primary">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
