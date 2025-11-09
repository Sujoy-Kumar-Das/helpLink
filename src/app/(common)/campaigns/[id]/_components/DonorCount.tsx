import { Box, Typography } from "@mui/material";

interface DonorCountProps {
  donors: number;
  daysLeft: number;
  progress: number;
}

export default function DonorCount({
  donors,
  daysLeft,
  progress,
}: DonorCountProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 4,
      }}
    >
      {/* Donors */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight={700}>
          {donors.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Donors
        </Typography>
      </Box>

      {/* Days Left */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight={700}>
          {daysLeft}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Days Left
        </Typography>
      </Box>

      {/* Funded Progress */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" fontWeight={700}>
          {progress.toFixed(0)}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Funded
        </Typography>
      </Box>
    </Box>
  );
}
