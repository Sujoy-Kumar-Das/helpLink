/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Typography,
} from "@mui/material";

const CampaignCard = ({ campaign }: { campaign: any }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(25, 118, 210, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 25px 50px rgba(25, 118, 210, 0.15)",
          border: "1px solid rgba(25, 118, 210, 0.2)",
        },
      }}
    >
      {/* Campaign Image with Gradient Overlay */}
      <Box
        sx={{
          height: 200,
          background: `linear-gradient(135deg, rgba(25, 118, 210, 0.3) 0%, rgba(156, 39, 176, 0.3) 100%), url(${campaign.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Status Badge */}
        <Chip
          label={campaign.status.toUpperCase()}
          color={campaign.status === "urgent" ? "error" : "primary"}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            fontWeight: 700,
            fontSize: "0.75rem",
            height: 28,
            background:
              campaign.status === "urgent"
                ? "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)"
                : "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
            color: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />

        {/* Donors Count */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            px: 1.5,
            py: 0.5,
          }}
        >
          <Typography variant="caption" fontWeight={700} color="primary">
            ❤️ {campaign.donors} donors
          </Typography>
        </Box>
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}
      >
        {/* Tags */}
        <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {campaign.tags.slice(0, 3).map((tag: string) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
                borderColor: "rgba(25, 118, 210, 0.3)",
                color: "primary.main",
              }}
            />
          ))}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            background: "linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {campaign.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            flexGrow: 1,
            lineHeight: 1.6,
          }}
        >
          {campaign.description}
        </Typography>

        {/* Progress Section */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}
          >
            <Typography variant="body2" fontWeight={700} color="primary">
              ${campaign.raised.toLocaleString()} raised
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              ${campaign.goal.toLocaleString()} goal
            </Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value={campaign.progress}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(25, 118, 210, 0.1)",
              "& .MuiLinearProgress-bar": {
                background: "linear-gradient(90deg, #1976d2 0%, #9c27b0 100%)",
                borderRadius: 5,
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
              },
            }}
          />

          <Box
            sx={{ display: "flex", justifyContent: "space-between", mt: 1.5 }}
          >
            <Typography variant="body2" color="primary" fontWeight={700}>
              {campaign.progress}% funded
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>
              {campaign.daysLeft}d left
            </Typography>
          </Box>
        </Box>

        {/* Impact & Organizer */}
        <Box sx={{ mt: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              p: 1.5,
              borderRadius: 2,
              background: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.2)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4caf50",
              }}
            />
            <Typography variant="body2" color="#4caf50" fontWeight={700}>
              🎯 {campaign.impact}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                border: "2px solid rgba(25, 118, 210, 0.2)",
              }}
              src={campaign.organizer.avatar}
            />
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="0.75rem"
              >
                Organized by
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {campaign.organizer.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
