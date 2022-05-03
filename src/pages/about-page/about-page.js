import React, { useRef } from 'react'
import './about-page.css'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AboutFirstSlide } from '../../components/about-firstslide/about-firstslide'

export const AboutPage = () => {
    const swiperRef = useRef(null)
    const slides = [
        { count: 1, maxCount: 3 },
        { count: 2, maxCount: 3 },
        { count: 3, maxCount: 3 },
    ]

    return (
        <Swiper ref={swiperRef}>
            {slides.map((slide) => (
                <SwiperSlide>
                    <AboutFirstSlide
                        prev={() => swiperRef.current.swiper.slidePrev()}
                        next={() => swiperRef.current.swiper.slideNext()}
                        slide={slide}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
