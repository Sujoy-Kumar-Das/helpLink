import RingProgressBar from "@/components/shared/progressBar/RingProgressbar";
import { Favorite, Share } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import DonateButton from "./DonateButton";
import DonorCount from "./DonorCount";
import OrganizerCard from "./OrganizerCard";

interface Organizer {
  name: string;
  image?: string;
  isVerified?: boolean;
}

interface ProgressSectionProps {
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  organizer: Organizer;
}

export default function ProgressSection({
  raised,
  goal,
  donors,
  daysLeft,
  organizer,
}: ProgressSectionProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <Card
      elevation={4}
      sx={{
        position: "sticky",
        top: 100,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <RingProgressBar progress={progress} />

        {/* Raised Amount */}
        <Typography variant="h4" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
          ${raised.toLocaleString()}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          raised of ${goal.toLocaleString()} goal
        </Typography>

        {/* Linear Progress */}
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            mb: 3,
            bgcolor: "gray.200",
            "& .MuiLinearProgress-bar": {
              bgcolor: "primary.main",
            },
          }}
        />

        {/* donor count Section */}
        <DonorCount daysLeft={daysLeft} donors={donors} progress={progress} />

        {/* Donate Button  */}
        <DonateButton />

        {/* Save & Share Buttons */}
        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Button variant="outlined" fullWidth startIcon={<Favorite />}>
            Save
          </Button>
          <Button variant="outlined" fullWidth startIcon={<Share />}>
            Share
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
