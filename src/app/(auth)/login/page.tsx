"use client";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import LoginLeftSection from "./_components/LoginLeftSection";
import LoginForm from "./_components/LoginForm";

const HopeLinkLogin = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <CommonContainer
      sx={{
        background: "var(--gradient)",
        py: 0,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={isMobile ? 1 : 8}
        sx={{
          minWidth: "md",
          mx: "auto",
          borderRadius: 4,
          overflow: "hidden",
          minHeight: isMobile ? "auto" : 600,
        }}
      >
        <Grid container>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <LoginLeftSection />
            </Grid>
          )}

          {/* Login Form */}
          <Grid item xs={12} md={isMobile ? 12 : 6}>
            <LoginForm />
          </Grid>
        </Grid>
      </Paper>
    </CommonContainer>
  );
};

export default HopeLinkLogin;
