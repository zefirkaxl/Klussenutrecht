import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// const slide = [photo01, photo2, photo3, photo4, photo5, photo6, photo7];
const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {/* {slide.map((el) => {
        return <SwiperSlide key={el}>{el}</SwiperSlide>;
      })} */}
    </Swiper>
  );
};

export default Slider