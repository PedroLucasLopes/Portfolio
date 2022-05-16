import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";

const Slider = ({ technologies }) => {
    return (
        <Swiper
            tag='section'
            wrapperTag='ul'
            spaceBetween={30}
            slidesPerView={3}
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
                    <SwiperSlide tag='li' key={`slide-${i}`}>
                        <img src={tech} alt={`slide-${i}`} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slider;
