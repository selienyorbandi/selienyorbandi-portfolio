import { useContext } from "react";
import { projectContext } from "../../context/projectContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, EffectCoverflow } from "swiper";

import { Image } from "../../models/Image.model";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel({images} : {images: Image[]}) {
  const { setProject } = useContext(projectContext);

  return (
    <div className="Carousel__Projects">
      <Swiper
        grabCursor={true}
        slideToClickedSlide={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        loopPreventsSlide={true}
        loopAdditionalSlides={30}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, EffectCoverflow, Pagination]}
        className="mySwiper">
        {
          images.map(image => <SwiperSlide key={image.id}>
            <img
              className="CarouselImg"
              src={image.imgSrc}
              alt={image.alt}
              onClick={() => setProject(image.id)}
            />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
}

export default Carousel;
