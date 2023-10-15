import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {

  const slides = [
    {
      url: 'https://m.media-amazon.com/images/I/7114uGhcy0L._UX679_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/I/714V5wkV8oL._UY741_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/I/81+3g00XzmL._UY741_.jpg',
    },

    {
      url: 'https://m.media-amazon.com/images/I/61GNclNEM8L._UY741_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/I/717KGNNVDfL._UX425_.jpg'
    },
    {
      url: 'https://m.media-amazon.com/images/I/81m1eXdqtpL._UX679_.jpg'
    },
    {
      url: 'https://m.media-amazon.com/images/I/514vCNWtZDL._UX569_.jpg'
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  setTimeout(() => {
    nextSlide()
  }, 10000);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' h-[55vh] lg:h-[70vh] w-full m-auto pb-10 pt-2 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='bg-no-repeat object-fill w-full h-full bg-center md:bg-auto bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div >
  );
}

export default Slider;