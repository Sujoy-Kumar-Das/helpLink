"use client";
import Form from "@/components/shared/from/From";
import InputField from "@/components/shared/from/InputField";
import { authSchema } from "@/schemas";
import { Facebook, Google, Twitter, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { FieldValues } from "react-hook-form";

const LoginForm = () => {
  const handleLogin = (fieldValues: FieldValues) => {
    console.log(fieldValues);
  };
  return (
    <Box
      sx={{
        padding: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "background.paper",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sign in to continue making a difference
        </Typography>
      </Box>

      <Form onSubmit={handleLogin} schema={authSchema.login}>
        <InputField
          label="Email Address"
          name="email"
          type="email"
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              px: 1,
            },
          }}
        />

        <InputField
          fullWidth
          label="Password"
          name="password"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Visibility sx={{ color: "text.primary", mx: 1 }} />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: 3,
              px: 1,
            },
          }}
        />
      </Form>

      {/* Remember Me & Forgot Password */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />

        <Typography
          component={Link}
          href="/forgot-password"
          variant="body2"
          color="primary"
          sx={{ fontWeight: 500 }}
        >
          Forgot password?
        </Typography>
      </Box>

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{
          mb: 3,
          borderRadius: 3,
          textTransform: "none",
        }}
      >
        Sign In
      </Button>

      {/* Divider */}
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Or continue with
        </Typography>
      </Divider>

      {/* Social Login Buttons */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Google />}
          sx={{
            borderRadius: 3,
            borderColor: "divider",
          }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Facebook />}
          sx={{
            borderRadius: 3,
            borderColor: "divider",
          }}
        >
          Facebook
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Twitter />}
          sx={{
            borderRadius: 3,
            borderColor: "divider",
          }}
        >
          Twitter
        </Button>
      </Box>

      {/* Register Link */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          component={Link}
          href={"/register"}
        >
          Don't have an account?{" "}
          <Typography color={"primary"} component={"span"}>
            Register here
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
