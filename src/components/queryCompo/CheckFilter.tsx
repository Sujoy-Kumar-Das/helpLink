"use client";
import { ICheckFilterOption } from "@/types/query.type";
import { Box, Checkbox, SxProps, Typography } from "@mui/material";

interface FilterQueryProps {
  title: string;
  queryOptions: ICheckFilterOption[];
  sx?: SxProps;
}

export default function CheckFilter({
  title,
  queryOptions,
  sx,
}: FilterQueryProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle1"
        fontWeight={700}
        gutterBottom
        color="primary"
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, ...sx }}>
        {queryOptions.map(({ label, id, value }) => (
          <Box key={id} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              size="small"
              value={value}
              sx={{
                color: "primary.main",
                "&.Mui-checked": {
                  color: "primary.main",
                },
              }}
            />
            <Typography variant="body2" fontWeight={600}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
