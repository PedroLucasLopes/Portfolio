import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import * as S from "./styles";

console.log(window.screen.width)
const Slider = ({ technologies }) => {
  return (
    <S.Wrapper>
      <Swiper
        tag="div"
        wrapperTag="ul"
        spaceBetween={160}
        slidesPerView={window.screen.width <= 768 ? 3 : 6}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
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