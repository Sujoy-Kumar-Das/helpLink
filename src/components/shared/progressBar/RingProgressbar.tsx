"use client";

import { Box, Typography, useTheme } from "@mui/material";

interface RingProgressBarProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

const RingProgressBar = ({
  progress,
  size = 120,
  strokeWidth = 8,
  label = "Funded",
}: RingProgressBarProps) => {
  const theme = useTheme();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.palette.grey[300]}
          strokeWidth={strokeWidth}
          fill="none"
        />

        <defs>
          <linearGradient
            id="progress-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={theme.palette.primary.main} />
            <stop offset="100%" stopColor={theme.palette.secondary.main} />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progress-gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: "stroke-dashoffset 0.6s ease, stroke 0.3s ease",
          }}
        />
      </svg>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.primary"
          sx={{ lineHeight: 1 }}
        >
          {Math.round(progress)}%
        </Typography>
        {label && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.2 }}>
            {label}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RingProgressBar;
