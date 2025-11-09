"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CampaignSliderProps {
  images: string[];
}

export default function CampaignSlider({ images }: CampaignSliderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        mb: 4,
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        style={
          {
            "--swiper-navigation-color": "#1976d2",
            "--swiper-pagination-color": "#1976d2",
          } as React.CSSProperties
        }
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 240, sm: 360, md: 400 },
              }}
            >
              <Image
                src={image}
                alt={`Campaign image ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                }}
                priority={index === 0}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
