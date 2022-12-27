import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./Slider.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Image } from "../../models/Image.model";

function Slider({ images }: { images: Image[] }): JSX.Element {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={true}
        grabCursor={true}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        lazy={true}
        className="Slider">
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img.imgSrc} alt={img.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
