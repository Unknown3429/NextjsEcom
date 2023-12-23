import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Pagination, Navigation } from 'swiper/modules'
// icons
import {
    FaQuoteLeft
} from "react-icons/fa";

const testimonialData = [
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/t-avt-3.png',
        name: 'Jhon Doe',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: '/favicon.png',
        name: 'Homo',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
];


const TestimonialSlider = () => {
    return <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-[450px] xl:w-[80vw]'
    >
        {testimonialData?.map((person, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 '>
                        {/* avtart name position  */}
                        <Fade>
                            <div className='w-full max-w-[250px] flex flex-col xl:justify-center items-center relative mx-auto
             xl:mx-0'>
                                <div className='flex flex-col justify-center text-center'>
                                    {/* avtart  */}
                                    <div className='mb-2 mx-auto'>
                                        <Image src={person.image} alt="Avatar" width={100} height={100} />
                                    </div>
                                    {/* name  */}
                                    <div className='text-lg'>{person.name}</div>
                                    {/* position  */}
                                    <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
                                </div>
                            </div>
                        </Fade>
                        {/* quote  */}
                        <Fade>
                            <div className='flex-1 flex flex-col justify-center items-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:pl-20 xl:before:left-0 xl:before:h-[200px] xl:before:mr-5 relative mb-20'>
                                {/* icon  */}
                                <div className='mb-4'>
                                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                                </div>
                                {/* message  */}
                                <div className='xl:text-lg text-center md:text-left'>
                                    {person.message}
                                </div>
                            </div>
                        </Fade>
                    </div>

                </SwiperSlide>
            )
        })}
    </Swiper>
}

export default TestimonialSlider