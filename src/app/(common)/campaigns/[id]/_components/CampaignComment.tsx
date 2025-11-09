"use client";

import { Favorite } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

export default function CampaignComment() {
  const comments = [
    {
      id: 1,
      user: { name: "Rahim", avatar: "/default-avatar.png" },
      time: "2 days ago",
      comment: "Amazing initiative! Keep it up 💪",
      likes: 12,
    },
    {
      id: 2,
      user: { name: "Ayesha", avatar: "/default-avatar.png" },
      time: "5 hours ago",
      comment: "Proud to be a part of this campaign ❤️",
      likes: 8,
    },
  ];
  return (
    <Card>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={700}>
          Comments & Support
        </Typography>

        {/* Comment Input */}
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <TextField
            fullWidth
            placeholder="Share your support or ask a question..."
            variant="outlined"
            multiline
            rows={2}
          />
        </Box>

        {/* Comments List */}
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar src={comment.user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {comment.user.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {comment.time}
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {comment.comment}
                    </Typography>
                    <Button startIcon={<Favorite />} size="small">
                      {comment.likes}
                    </Button>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
