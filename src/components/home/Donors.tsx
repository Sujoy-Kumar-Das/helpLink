import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllTestimonialsQuery } from "../../redux/features/testimonials/getTestimonials.api";
import { TDonorTestimonialItem } from "../../types";
import Loader from "../Loader";
import DonorTestimonialCard from "../testimonial/DonorTestimonialCard";
import CustomContainer from "../ui/shared/CustomContainer";
import Header from "../ui/shared/Header";

export default function Donors() {
  const { isLoading, data } = useGetAllTestimonialsQuery(6);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <CustomContainer>
      <Header
        title="Donor Stories"
        subTitle="Hear from Those Who Made a Difference"
      />
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {data?.data?.map((item: TDonorTestimonialItem) => (
          <SwiperSlide key={item._id}>
            <DonorTestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomContainer>
  );
}
