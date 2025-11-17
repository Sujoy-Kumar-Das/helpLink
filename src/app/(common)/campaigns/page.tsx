import PageHeader from "@/components/shared/commonHeader/PageHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import CustomPagination from "@/components/shared/pagination/Pagination";
import CampaignCardSkeleton from "@/components/skeleton/CampaignCardSkeleton";
import { Box, Grid } from "@mui/material";
import { Suspense } from "react";
import CampaignsList from "./_components/CamaignsList";
import CampaignHeader from "./_components/CampaignHeader";
import CampaignsFilterSidebar from "./_components/CampaignsFilterSidebar";

const CampaignsPage = () => {
  return (
    <Box component={"section"}>
      <PageHeader
        title="Active Campaigns"
        subtitle="Explore all our current initiatives and projects. Join us in making a positive impact by supporting causes that matter."
      />

      <CommonContainer>
        <CampaignHeader />

        <Grid container spacing={2}>
          {/* Filter Sidebar */}
          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <CampaignsFilterSidebar />
            </Box>
          </Grid>

          {/* Main content */}
          <Grid item xs={12} md={9}>
            <Suspense fallback={<CampaignCardSkeleton />}>
              <CampaignsList />
              <CustomPagination />
            </Suspense>
          </Grid>
        </Grid>
      </CommonContainer>

      {/* campaign page header */}
    </Box>
  );
};

export default CampaignsPage;
