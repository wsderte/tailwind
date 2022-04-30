import React, { useRef } from 'react'
import './about-page.css'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AboutFirstSlide } from '../../components/about-firstslide/about-firstslide'

export const AboutPage = () => {
    const swiperRef = useRef(null)

    return (
        <Swiper ref={swiperRef}>
            <SwiperSlide>
                <AboutFirstSlide
                    prev={() => swiperRef.current.swiper.slidePrev()}
                    next={() => swiperRef.current.swiper.slideNext()}
                />
            </SwiperSlide>
            <SwiperSlide>
                <AboutFirstSlide
                    prev={() => swiperRef.current.swiper.slidePrev()}
                    next={() => swiperRef.current.swiper.slideNext()}
                />
            </SwiperSlide>
            <SwiperSlide>
                <AboutFirstSlide
                    prev={() => swiperRef.current.swiper.slidePrev()}
                    next={() => swiperRef.current.swiper.slideNext()}
                />
            </SwiperSlide>
        </Swiper>
    )
}
