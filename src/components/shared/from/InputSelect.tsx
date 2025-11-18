"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ISelectItem {
  id: string;
  title: string;
  value: string;
}

type TInputSelectProps = {
  name: string;
  label: string;
  items: ISelectItem[];
};

export default function InputSelect({ items, name, label }: TInputSelectProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const labelId = `${name}-label`;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl fullWidth sx={{ mt: 2 }} error={!!errors[name]}>
          <InputLabel sx={{ color: "text.primary" }} id={labelId}>
            {label}
          </InputLabel>

          <Select
            {...field}
            labelId={labelId}
            label={label}
            value={field.value || ""}
            displayEmpty
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "background.default",
                },
              },
            }}
          >
            {items.map((item) => (
              <MenuItem
                key={item.id}
                value={item.value}
                sx={{
                  color: "text.primary",
                  "&.Mui-selected": {
                    bgcolor: "background.paper",
                    color: "text.secondary",
                  },
                  "&:hover": {
                    bgcolor: "background.default",
                    color: "text.secondary",
                  },
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Select>

          {errors[name] && (
            <FormHelperText sx={{ textTransform: "capitalize" }}>
              {errors[name]?.message as string}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
