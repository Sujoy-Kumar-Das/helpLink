import CheckFilter from "@/components/queryCompo/CheckFilter";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { campaignQuery } from "./camaigns.query.constant";

const CampaignsFilterSidebar = () => {
  return (
    <Card
      sx={{
        backgroundColor: `background.default`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            Filters
          </Typography>

          <Button
            variant="text"
            size="small"
            sx={{
              fontWeight: 600,
              textTransform: "none",
              color: "text.secondary",
              "&:hover": {
                backgroundColor: "transparent",
                color: "text.primary",
                boxShadow: 0,
              },
            }}
          >
            Clear All
          </Button>
        </Box>

        {/* Categories */}

        <CheckFilter
          title="Categories"
          queryOptions={campaignQuery.categoryOptions}
        />

        <Divider sx={{ my: 2, borderColor: "primary.main" }} />

        {/* Status */}
        <CheckFilter
          title="Checks"
          queryOptions={campaignQuery.statusOptions}
        />

        <Divider sx={{ my: 2, borderColor: "primary.main" }} />

        {/* Location */}
        {/* <Box sx={{ mb: 4 }}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            gutterBottom
            color="primary"
          >
            📍 Location
          </Typography>
          <Autocomplete
            size="small"
            options={locations}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search location..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <LocationOn sx={{ color: "primary.main", mr: 1 }} />
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    background: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              />
            )}
          />
        </Box> */}
      </Box>
    </Card>
  );
};

export default CampaignsFilterSidebar;
