"use client";
import { Box, Grid, Paper, useMediaQuery } from "@mui/material";
import LeftRegisterSection from "./_components/LeftRegisterSection";
import RegistrationForm from "./_components/RegistrationForm";

const HopeLinkRegister = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "var(--gradient)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={isMobile ? 1 : 8}
        sx={{
          width: "100%",
          maxWidth: "lg",
          borderRadius: 4,
          overflow: "hidden",
          minHeight: isMobile ? "auto" : 700,
        }}
      >
        <Grid container>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <LeftRegisterSection />
            </Grid>
          )}

          <Grid item xs={12} md={isMobile ? 12 : 6}>
            <RegistrationForm />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HopeLinkRegister;
