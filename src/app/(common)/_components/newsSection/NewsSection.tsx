import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { Box, Button } from "@mui/material";
import NewsList from "./NewsList";

export default function NewsSection() {
  return (
    <CommonContainer>
      <CommonHeader
        title="Latest Stories"
        subtitle="Stay updated with our latest news and impact stories"
      />

      <NewsList />

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="outlined" size="large">
          View All News
        </Button>
      </Box>
    </CommonContainer>
  );
}
