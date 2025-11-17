"use client";
import {
  Box,
  FormHelperText,
  SxProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  type: string;
  name: string;
  label: string;
  sx?: SxProps;
  InputProps?: TextFieldProps["InputProps"];
} & TextFieldProps;

export default function InputField({
  type,
  name,
  label,
  sx,
  ...rest
}: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box sx={{ width: "100%" }}>
          <TextField
            {...field}
            fullWidth
            label={label}
            type={type}
            sx={{ mt: 2, ...sx }}
            error={!!errors[name]}
            {...rest}
          />
          {errors[name] && (
            <FormHelperText
              error
              sx={{ textTransform: "capitalize", width: "100%" }}
            >
              {errors[name]?.message as string}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
