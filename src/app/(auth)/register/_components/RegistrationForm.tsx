"use client";
import Form from "@/components/shared/from/From";
import Stepper from "@/components/steps/Steps";
import useMultiStepForm from "@/hooks/useMultiStepForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import SocialLogin from "../../_components/SocialLogin";
import registerMultiformStepsData from "./registerMultiformStepsData";

const RegistrationForm = () => {
  const stepsLength = registerMultiformStepsData.length;

  const {
    currentStep,
    isFirstStep,
    isLastStep,
    formData,
    onNextStep,
    onPrevStep,
    updateFormData,
  } = useMultiStepForm({ stepsLength });

  const currentStepFormData = registerMultiformStepsData[currentStep];

  const formValidationSchema = currentStepFormData.schema;
  const formCurrentStepCompo = currentStepFormData.component;

  const formMethods = useForm({
    resolver: zodResolver(formValidationSchema),
    mode: "onChange",
  });

  const { trigger, handleSubmit } = formMethods;

  const handleNextStep = async (data: FieldValues) => {
    const isValid = await trigger();

    if (!isValid) return;

    const nextData = { ...formData, ...data };
    updateFormData(nextData);

    console.log({ nextData });

    if (isLastStep) {
      console.log({ formData });
    } else {
      onNextStep();
    }

    console.log({ isValid, data, formData });
  };

  return (
    <Box
      sx={{
        padding: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            color: "text.primary",
          }}
        >
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join our community of changeovers
        </Typography>
      </Box>

      <Stepper
        activeStep={currentStep}
        steps={["Personal Information", "Account Information"]}
        sx={{ mb: 4 }}
      />

      <Form methods={formMethods}>
        <Box sx={{ flex: 1 }}>{formCurrentStepCompo}</Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            onClick={onPrevStep}
            disabled={isFirstStep}
            type="button"
            sx={{
              borderRadius: 3,
              px: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Back
          </Button>

          <Button
            type={isLastStep ? "submit" : "button"}
            onClick={handleSubmit(handleNextStep)}
            variant="contained"
            sx={{
              borderRadius: 3,
              px: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {isLastStep ? "Create Account" : "Next"}
          </Button>
        </Box>
      </Form>

      {/* Divider */}
      <Divider sx={{ my: 4 }}>
        <Typography variant="body2" color="text.secondary">
          Or sign up with
        </Typography>
      </Divider>

      <SocialLogin />

      {/* Login Link */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Already have an account?{" "}
          <Link
            href="/login"
            variant="body2"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            Sign in here
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
