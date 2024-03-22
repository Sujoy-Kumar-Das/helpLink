import { Box } from "@mui/material";
import CustomContainer from "../../ui/shared/CustomContainer";
import GalleryImage from "./GalleryImage";
import GalleryInfo from "./GalleryInfo";

export default function Gallery() {
  return (
    <CustomContainer bgColor={false}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 8,
        }}
      >
        <GalleryInfo />
        <GalleryImage />
      </Box>
    </CustomContainer>
  );
}
