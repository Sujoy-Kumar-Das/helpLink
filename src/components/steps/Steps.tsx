import { Stepper as MuiStepper, Step, StepLabel, SxProps } from "@mui/material";

interface StepperProps {
  steps: string[];
  activeStep: number;
  sx?: SxProps;
}

export default function Stepper({ steps, activeStep, sx }: StepperProps) {
  return (
    <MuiStepper activeStep={activeStep} sx={{ ...sx }}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
