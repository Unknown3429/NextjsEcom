import React from 'react'
import Fade from 'react-reveal/Fade';
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = ({ mode }) => {
    return (
        <div>
            <Fade >

                <section className='lg:min-h-[50vh] min-h-[90vh] mb-10  w-full flex flex-col items-center'>
                    <Fade >
                        <div class="text-center my-20">
                            <h1 class={mode ? `sm:text-4xl text-2xl font-bold title-font text-[#e9e7ee]  mb-2` : `sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-2`}>Services</h1>
                            <div class="flex mt-3 mb-10 justify-center">
                                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                    </Fade>
                    <div className='w-full gap-5 flex flex-col lg:flex-row justify-around m-auto text-indigo-500 text-4xl items-center lg:h-[36vh]'>

                        <Fade>
                            <div className='lg:w-[33vw] w-full flex flex-col rounded-lg justify-center  h-[25vh] items-center lg:h-full bg-gray-100'>
                                <div className=' bg-white rounded-full h-16 w-16 flex justify-center items-center'>
                                    <span >
                                        <TbTruckDelivery />
                                    </span>
                                </div>
                                <h2 className='text-black text-xl mt-2 font-medium'>
                                    Super Fast and Free Delivery
                                </h2>
                            </div>
                        </Fade>
                        <Fade>
                            <div className='flex flex-col justify-between w-full lg:w-[33vw] h-full'>
                                <div className='lg:w-[33vw] w-full rounded-lg lg:flex-row flex-col flex gap-4 justify-center items-center h-[25vh] lg:h-[17vh] bg-gray-100'>
                                    <div className='bg-white rounded-full h-16 w-16 flex justify-center items-center'>
                                        <BiShieldQuarter />
                                    </div>
                                    <h2 className='text-black text-xl mt-2 font-medium'>
                                        Super Fast and Free Delivery
                                    </h2>
                                </div>
                                <div className='lg:w-[33vw] mt-5 w-full rounded-lg flex lg:flex-row flex-col gap-4 justify-center items-center h-[25vh] lg:h-[17vh]  bg-gray-100'>
                                    <div className='bg-white rounded-full h-16 w-16 flex justify-center items-center'>
                                        <FaHandHoldingUsd />
                                    </div>
                                    <h2 className='text-black text-xl mt-2 font-medium'>
                                        Super Fast and Free Delivery
                                    </h2>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className='lg:w-[33vw] w-full rounded-lg flex flex-col justify-center items-center  h-[25vh] lg:h-full bg-gray-100'>
                                <div className='bg-white rounded-full h-16 w-16 flex justify-center items-center'>
                                    <RiSecurePaymentLine />
                                </div>
                                <h2 className='text-black text-xl mt-2 font-medium'>
                                    Super Fast and Free Delivery
                                </h2>
                            </div>
                        </Fade>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Service