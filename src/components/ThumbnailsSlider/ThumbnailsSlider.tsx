import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageItem {
  imgSrc: string;
  thumbsrc: string;
  alt: string;
}

type Images = Array<ImageItem>;

interface ImageList {
  images: Images;
}

function ThumbnailsSlider({ images }: ImageList): JSX.Element {
  const [thumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        {images.map((img, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <img src={img.imgSrc} alt={img.alt} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {images.map((thumb, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <img src={thumb.thumbsrc} alt={thumb.alt} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

export default ThumbnailsSlider;
