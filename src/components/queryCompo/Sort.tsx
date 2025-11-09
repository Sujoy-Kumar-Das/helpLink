"use client";
import { ISortOption } from "@/types/query.type";
import { Sort } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";

interface SortQueryProps {
  title: string;
  queryOptions: ISortOption[];
  sx?: SxProps;
}

export default function SortQuery({ title, queryOptions, sx }: SortQueryProps) {
  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel sx={{ fontWeight: 600 }}>{title}</InputLabel>
      <Select
        value="newest"
        label="Sort By"
        startAdornment={<Sort sx={{ color: "primary.main", mr: 1 }} />}
        sx={{
          borderRadius: 2,
          background: "primary.main",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          ...sx,
        }}
      >
        {queryOptions.map(({ icon: Icon, id, label, value }) => (
          <MenuItem key={id} value={value}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {Icon && <Icon />}

              {label}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
