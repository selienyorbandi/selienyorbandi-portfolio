import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, EffectCoverflow, } from "swiper";

import portfolio from "../../assets/portfolio-desktop.jpg";
import videoplus from "../../assets/videoplus-desktop.jpg";
import recipesapp from "../../assets/recipesapp-desktop.jpg";
import greenbuddies from "../../assets/greenbuddies-desktop.jpg";
import computahorra from "../../assets/computahorra-desktop.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel () {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={5}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      loop={true}
      loopPreventsSlide={true}
      loopAdditionalSlides={30}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img className="CarouselImg" src={computahorra}/></SwiperSlide>
      <SwiperSlide><img className="CarouselImg" src={recipesapp}/></SwiperSlide>
      <SwiperSlide><img className="CarouselImg" src={greenbuddies} /></SwiperSlide>
      <SwiperSlide><img className="CarouselImg" src={portfolio}/></SwiperSlide>
      <SwiperSlide><img className="CarouselImg" src={videoplus}/></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;