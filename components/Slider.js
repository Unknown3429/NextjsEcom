// import React, { useState } from 'react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Slider() {

  const slides = [
    'https://m.media-amazon.com/images/I/7114uGhcy0L._UX679_.jpg',
    ,
    'https://m.media-amazon.com/images/I/714V5wkV8oL._UY741_.jpg',
    ,
    'https://m.media-amazon.com/images/I/81+3g00XzmL._UY741_.jpg',
    ,
    'https://m.media-amazon.com/images/I/61GNclNEM8L._UY741_.jpg',
    ,
    'https://m.media-amazon.com/images/I/717KGNNVDfL._UX425_.jpg'
    ,
    'https://m.media-amazon.com/images/I/81m1eXdqtpL._UX679_.jpg'
    ,
    'https://m.media-amazon.com/images/I/514vCNWtZDL._UX569_.jpg'
  ];
  // console.log(slides);


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        rewind={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides?.map((src) => {
          return <SwiperSlide className='' key={src}><img className='object-cover h-[45vh] m-auto mb-10' src={src} /></SwiperSlide>
        })}
      </Swiper>
    </>
  );
}

export default Slider;