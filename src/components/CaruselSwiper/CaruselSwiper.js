import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import China from '../../assets/images/China.jpeg'
import Kazahstan from '../../assets/images/Kazahstan.jpg'
import Canada from '../../assets/images/Canada.webp'
import USa from '../../assets/images/USA.webp'
import Australia from '../../assets/images/Australia.avif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[51vh]'  src={China}/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={Kazahstan} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='h-[51vh]'   src={Canada} />
        </SwiperSlide>
        <SwiperSlide>
        <img  className='h-[51vh]'  src={USa} />
        </SwiperSlide>
        <SwiperSlide>
        <img  className='h-[51vh]'  src={Australia} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
