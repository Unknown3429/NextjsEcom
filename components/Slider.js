import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Animate from './Animate';


function Slider({ mode }) {

  const slides = [
    '/slide1.png',
    '/slide2.png',
    '/slide3.png',
    '/slide4.png',
    '/slide5.png',
    // 'https://m.media-amazon.com/images/I/714V5wkV8oL._UY741_.jpg',
    // ,
    // 'https://m.media-amazon.com/images/I/81+3g00XzmL._UY741_.jpg',
    // ,
    // 'https://m.media-amazon.com/images/I/61GNclNEM8L._UY741_.jpg',
    // ,
    // 'https://m.media-amazon.com/images/I/717KGNNVDfL._UX425_.jpg'
    // ,
    // 'https://m.media-amazon.com/images/I/81m1eXdqtpL._UX679_.jpg'
    // ,
    // 'https://m.media-amazon.com/images/I/514vCNWtZDL._UX569_.jpg'
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
        rewind={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Animate>
          {slides?.map((src) => {
            return <SwiperSlide className={mode ? 'bg-[#232D3F]' : ""} key={src}>
              <img className='object-fill  lg:h-[70vh] w-[100vw] md:h-[50vh] h-[30vh] m-auto mb-10' src={src} />
            </SwiperSlide>
          })}
        </Animate>
      </Swiper>
    </>
  );
}

export default Slider;