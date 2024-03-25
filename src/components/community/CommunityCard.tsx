import { Box, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TCommunityPost } from "../../types/comment.type";
import AddComment from "./AddComment";
import CommunityCommentCard from "./CommunityCommentCard";

export default function CommunityCard({ item }: { item: TCommunityPost }) {
  const {
    _id,
    user: { username, location, image_url },
    message,
    comments,
  } = item;
  return (
    <Card variant="outlined" style={{ margin: "20px" }}>
      <CardContent>
        <Box sx={{ border: "1px solid", p: 2, borderRadius: "8px", mb: 5 }}>
          <Typography variant="body1" className="message">
            {message}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Avatar src={image_url} alt={username} />
            <div>
              <Typography variant="subtitle1" className="username">
                {username}
              </Typography>
              <Typography variant="body2" className="location">
                {location}
              </Typography>
            </div>
          </Box>
        </Box>
        <Grid container spacing={1}>
          {comments.map((comment, index) => (
            <CommunityCommentCard comment={comment} key={index} />
          ))}
        </Grid>
        <AddComment id={_id} />
      </CardContent>
    </Card>
  );
}
