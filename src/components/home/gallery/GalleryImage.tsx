import { Box, ImageList, ImageListItem } from "@mui/material";
import image from "../../../assets/donationImage/1.jpg";
import image10 from "../../../assets/donationImage/10.jpeg";
import image2 from "../../../assets/donationImage/2.jpeg";
import image3 from "../../../assets/donationImage/3.jpeg";
import image4 from "../../../assets/donationImage/4.jpeg";
import image5 from "../../../assets/donationImage/5.jpeg";
import image6 from "../../../assets/donationImage/6.jpeg";
import image7 from "../../../assets/donationImage/7.jpeg";
import image8 from "../../../assets/donationImage/8.jpeg";
import image9 from "../../../assets/donationImage/9.jpeg";

export default function GalleryImage() {
  const imageData = [
    { title: "image1", image: image },
    { title: "image2", image: image2 },
    { title: "image3", image: image3 },
    { title: "image4", image: image4 },
    { title: "image5", image: image5 },
    { title: "image6", image: image6 },
    { title: "image7", image: image7 },
    { title: "image8", image: image8 },
    { title: "image9", image: image9 },
    { title: "image10", image: image10 },
  ];
  return (
    <Box
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1500"
      component={"div"}
      sx={{ width: { xs: "100%", md: "50%" } }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageData.map((item) => (
          <ImageListItem key={item.image}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
