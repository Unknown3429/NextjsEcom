import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Animate from './Animate';

const ProductSlider = ({ image }) => {
    console.log(image);
    const slides = [
        `${image}`,
        '/back.jpg',
    ];
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                rewind={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <div className='flex justify-center items-center'>
                    {slides?.map((src) => {
                        return (
                            <Animate>
                                <SwiperSlide className={''} key={src}>
                                    <img className=' max-h-[55vh] w-full mt-4 mb-10 object-cover object-top rounded' src={src} />
                                </SwiperSlide>
                            </Animate>)
                    })}
                </div>
            </Swiper>
        </div>
    )
}

export default ProductSlider