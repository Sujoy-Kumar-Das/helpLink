import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { TComment } from "../../types/comment.type";

export default function CommunityCommentCard({
  comment,
}: {
  comment: TComment;
}) {
  return (
    <Grid
      item
      xs={12}
      sx={{ border: "1px solid", borderRadius: "8px", mb: 2, py: 3 }}
    >
      <Box>
        <Typography variant="body2" className="comment-text" sx={{ mt: 1 }}>
          {comment.comment}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src={comment.commenter.image_url}
            alt={comment.commenter.username}
          />
          <Box component={"div"}>
            <Typography variant="subtitle2">
              {comment.commenter.username}
            </Typography>
            <Typography variant="subtitle2">
              {comment.commenter.location}
            </Typography>
          </Box>
        </Box>

        <Box component={"div"} sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="contained" color="error" size="small">
            Delete
          </Button>
          <Button variant="contained" color="info" size="small">
            Update
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
