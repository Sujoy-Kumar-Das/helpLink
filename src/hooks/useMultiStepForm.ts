"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";

export default function useMultiStepForm({
  stepsLength,
}: {
  stepsLength: number;
}) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState({});

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === stepsLength - 1;

  const onNextStep = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const onPrevStep = () => {
    if (!isFirstStep) setCurrentStep((prev) => prev - 1);
  };

  const updateFormData = (newData: FieldValues) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({});
  };

  return {
    isFirstStep,
    isLastStep,
    currentStep,
    formData,
    onNextStep,
    onPrevStep,
    resetForm,
    updateFormData,
  };
}
