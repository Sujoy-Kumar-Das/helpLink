import { Box, Card, CardContent, Grid, Skeleton } from "@mui/material";

const CampaignCardSkeleton = () => {
  return (
    <Grid container spacing={3}>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Skeleton
              variant="rectangular"
              height={200}
              sx={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                background: `linear-gradient(90deg, grey.200 25%, gray.100} 50%, grey.200 75%)`,
              }}
            />
            <CardContent
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
                <Skeleton variant="rounded" width={60} height={24} />
                <Skeleton variant="rounded" width={80} height={24} />
              </Box>

              <Skeleton variant="text" height={32} sx={{ mb: 1 }} />

              <Skeleton variant="text" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="text" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="text" height={20} sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Skeleton variant="text" width={100} height={20} />
                  <Skeleton variant="text" width={80} height={20} />
                </Box>
                <Skeleton variant="rounded" height={8} sx={{ mb: 1 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Skeleton variant="text" width={60} height={20} />
                  <Skeleton variant="text" width={50} height={20} />
                </Box>
              </Box>

              <Box sx={{ mt: "auto" }}>
                <Skeleton variant="text" height={20} sx={{ mb: 1 }} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Skeleton variant="circular" width={24} height={24} />
                  <Skeleton variant="text" width={120} height={20} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CampaignCardSkeleton;
