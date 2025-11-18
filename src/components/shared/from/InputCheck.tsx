"use client";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  SxProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputCheck = {
  name: string;
  label: string;
  sx?: SxProps;
  
};

export default function InputCheck({ name, label, sx }: TInputCheck) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Controller
        name={name}
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  sx={{ color: "text.primary", ...sx }}
                />
              }
              label={label}
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: "text.primary",
                },
              }}
            />
            {errors[name] && (
              <FormHelperText error sx={{ textTransform: "capitalize" }}>
                {errors[name]?.message as string}
              </FormHelperText>
            )}
          </>
        )}
      />
    </Box>
  );
}
