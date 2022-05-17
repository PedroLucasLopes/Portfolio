import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import * as S from "./styles";
const Slider = ({ technologies }) => {
  return (
    <S.Wrapper>
      <Swiper
        tag="div"
        wrapperTag="ul"
        spaceBetween={5}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {technologies.map((tech, i) => {
          return (
            <SwiperSlide tag="li" key={`slide-${i}`}>
              <img src={`./assets/img/${tech}.png`} alt={`slide-${i}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Wrapper>
  );
};

export default Slider;