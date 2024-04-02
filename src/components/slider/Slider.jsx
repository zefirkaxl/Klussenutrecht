import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import photo01 from '../photos/slide/w4.jpg'
import photo02 from "../photos/slide/w5.jpg";
import photo03 from "../photos/slide/w6.jpg";
import photo04 from "../photos/slide/w7.jpg";
import photo05 from "../photos/slide/w9.jpg";
import photo06 from "../photos/slide/w10.jpg";
import photo07 from "../photos/slide/w11.jpg";
import photo08 from "../photos/slide/w12.jpg";
import photo09 from "../photos/slide/w13.jpg";
import photo10 from "../photos/slide/w14.jpg";
import './Slider.scss'
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation,Pagination} from "swiper/modules";

const slide = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
];
const Slider = () => {
  return (
    <section id="photo" className="slider">
      <div className="slider__container">
        <Swiper
          spaceBetween={60}
          modules={[Navigation,Pagination]}
          navigation
          centeredSlides={true}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
        >
          {slide.map((el) => {
            return (
              <SwiperSlide className="slider__item" key={el}>
                <img src={el} alt="photo" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider