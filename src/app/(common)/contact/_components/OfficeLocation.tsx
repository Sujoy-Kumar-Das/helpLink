import CommonHeader from "@/components/shared/commonHeader/CommonHeader";
import CommonContainer from "@/components/shared/contaners/CommonContainer";
import { LocationOn } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
export default function OfficeLocation() {
  return (
    <CommonContainer sx={{ py: 8, maxWidth: "lg", mx: "auto" }}>
      <CommonHeader
        title="Visit Our Headquarters"
        subtitle="Come see where the magic happens"
      />

      <Box
        sx={{
          height: 400,
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey.100",
        }}
      >
        <Box textAlign="center">
          <LocationOn sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            HopeLink Headquarters
          </Typography>
          <Typography variant="body2" color="text.secondary">
            123 Hope Avenue, San Francisco, CA 94102
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://maps.google.com/"
              target="_blank"
            >
              Open in Google Maps
            </Link>
          </Button>
        </Box>
      </Box>
    </CommonContainer>
  );
}
