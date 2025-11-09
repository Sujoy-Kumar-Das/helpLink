import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";

const news = [
  {
    id: 1,
    title: "HopeLink Expands to Support 10 New Communities",
    image: "/news/expansion.jpg",
    excerpt:
      "Our recent expansion brings hope and support to 10 additional communities in need across Southeast Asia.",
    category: "Updates",
    date: "Dec 15, 2024",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "How Your Donations Transformed Lives in 2024",
    image: "/news/impact.jpg",
    excerpt:
      "A comprehensive look at the incredible impact our community has made through generous donations this year.",
    category: "Impact",
    date: "Dec 8, 2024",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Volunteer Spotlight: Meet Sarah, Our Community Hero",
    image: "/news/volunteer.jpg",
    excerpt:
      "Discover how Sarah dedicated 500+ hours to helping communities access clean water and education.",
    category: "Stories",
    date: "Dec 1, 2024",
    readTime: "4 min read",
  },
];

export default function NewsList() {
  return (
    <Grid container spacing={4}>
      {news.map((news) => (
        <Grid item xs={12} md={4} key={news.id}>
          <NewsCard news={news} />
        </Grid>
      ))}
    </Grid>
  );
}
