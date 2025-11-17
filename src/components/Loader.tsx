"use client";

import { VolunteerActivism } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";

interface FullPageLoaderProps {
  message?: string;
  subtitle?: string;
}

export function FullPageLoader({
  message = "HopeLink",
  subtitle = "Making the world better, one load at a time...",
}: FullPageLoaderProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      {/* Animated Logo Container */}
      <Box
        sx={{
          position: "relative",
          width: 100,
          height: 100,
          mb: 4,
        }}
      >
        {/* Main Logo */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #1E6DC6 0%, #2E8B57 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "logoSpin 3s ease-in-out infinite",
            "@keyframes logoSpin": {
              "0%": {
                transform: "rotate(0deg) scale(1)",
                borderRadius: "50%",
              },
              "50%": {
                transform: "rotate(180deg) scale(1.1)",
                borderRadius: "30%",
              },
              "100%": {
                transform: "rotate(360deg) scale(1)",
                borderRadius: "50%",
              },
            },
          }}
        >
          <VolunteerActivism
            sx={{
              fontSize: 40,
              color: "white",
              animation: "iconPulse 2s ease-in-out infinite",
              "@keyframes iconPulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.2)" },
              },
            }}
          />
        </Box>

        {/* Pulsing Ring */}
        <Box
          sx={{
            position: "absolute",
            top: -10,
            left: -10,
            right: -10,
            bottom: -10,
            border: "2px solid",
            borderColor: "primary.light",
            borderRadius: "50%",
            animation: "pulseRing 2s ease-out infinite",
            "@keyframes pulseRing": {
              "0%": {
                transform: "scale(1)",
                opacity: 1,
              },
              "100%": {
                transform: "scale(1.5)",
                opacity: 0,
              },
            },
          }}
        />
      </Box>

      {/* Text Content */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(135deg, #1E6DC6 0%, #2E8B57 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 2,
          animation: "textGlow 2s ease-in-out infinite alternate",
          "@keyframes textGlow": {
            "0%": { opacity: 0.8 },
            "100%": { opacity: 1 },
          },
        }}
      >
        {message}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
          textAlign: "center",
          maxWidth: 300,
          animation: "fadeInOut 3s ease-in-out infinite",
          "@keyframes fadeInOut": {
            "0%, 100%": { opacity: 0.6 },
            "50%": { opacity: 1 },
          },
        }}
      >
        {subtitle}
      </Typography>

      {/* Progress Indicator */}
      <CircularProgress
        size={50}
        thickness={5}
        sx={{
          color: "primary.main",
          animation: "circularProgress 1.5s ease-in-out infinite",
          "@keyframes circularProgress": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />

      {/* Loading Steps */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            display: "block",
            mb: 1,
            animation: "stepChange 6s ease-in-out infinite",
            "@keyframes stepChange": {
              "0%": { content: '"Initializing hope..."' },
              "25%": { content: '"Loading compassion..."' },
              "50%": { content: '"Connecting communities..."' },
              "75%": { content: '"Preparing impact..."' },
              "100%": { content: '"Almost ready..."' },
            },
          }}
        >
          Initializing hope...
        </Typography>
      </Box>
    </Box>
  );
}
