"use client";

import { Box, Typography } from "@mui/material";

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
        background: "var(--gradient)",
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
        {/* <Box
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
        </Box> */}

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
          color: "text.primary",
          mt: 3,
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
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
