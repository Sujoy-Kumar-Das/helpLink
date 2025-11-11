/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
// todo add news type
export default function NewsCard({ news }: { news: any }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={news.image}
        alt={news.title}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={news.category}
            color="primary"
            size="small"
            sx={{ mb: 1 }}
          />
        </Box>

        <Typography variant="h5" component="h3" gutterBottom>
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
            {news.date} • {news.readTime}
          </Typography>
          <Button variant="text" color="primary">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
