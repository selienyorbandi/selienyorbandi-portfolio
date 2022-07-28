import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, EffectCoverflow } from "swiper";

import portfolio from "../../assets/portfolio-desktop.jpg";
import videoplus from "../../assets/videoplus-desktop.jpg";
import recipesapp from "../../assets/recipesapp-desktop.jpg";
import greenbuddies from "../../assets/greenbuddies-desktop.jpg";
import computahorra from "../../assets/computahorra-desktop.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel() {
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
        <SwiperSlide>
          <img
            className="CarouselImg"
            src={computahorra}
            onDoubleClick={() =>
              window.open("https://github.com/selienyorbandi/computahorra", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="CarouselImg"
            src={recipesapp}
            onDoubleClick={() =>
              window.open("https://github.com/selienyorbandi/Recipes-App", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="CarouselImg"
            src={greenbuddies}
            onDoubleClick={() =>
              window.open("https://github.com/PPROF1-2021/a5-g4-tienda-on-line", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="CarouselImg" src={portfolio} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="CarouselImg" src={videoplus} 
            onDoubleClick={() =>
              window.open("https://github.com/selienyorbandi/videoplus", "_blank")
            }/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
