import React, { useEffect } from 'react'
import { GiCrossMark } from "react-icons/gi";
import { AiTwotoneThunderbolt } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import Animate from './Animate';

const QuickView = ({ product, setModal }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden"

        return () => {
            document.body.style.overflowY = "scroll"
        }
    }, [])

    console.log(product);

    return (
        <div className='fixed left-0 right-0 top-0 bottom-0 z-50 inset-0 backdrop-blur-sm bg-opacity-60 bg-black flex justify-center items-center'>
            <div className='fixed '>
                <div className='flex justify-end mr-5 -mb-10  items-center '>
                    <GiCrossMark onClick={() => { setModal(false) }} className=' text-black cursor-pointer text-2xl z-10 ' />
                </div>
                <Animate
                    initial={{ y: "50%", opacity: 0, scale: 0.5 }}
                    animate={{ y: "0", opacity: 1, scale: 1 }}
                    exit={{ y: "-150%", opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className=' lg:h-[60vh] md:h-[65vh] sm:h-[90vh] h-[100vh] p-5 md:w-[70vw] w-[100vw] sm:w-[90vw] bg-white flex justify-between items-center'>
                        {/* image  */}
                        <div className='group h-full flex flex-col justify-center cursor-pointer items-center'>
                            <img className='h-full md:w-[30vw] sm:w-[42vw] w-[48] object-contain' src={product.img} alt="" />
                        </div>

                        {/* text  */}
                        <div className='h-full md:gap-5 gap-2 flex-col flex justify-center items-start md:w-[30vw] sm:w-[42vw] w-[48]'>
                            {/* title  */}
                            <h1 className='text-3xl font-bold text-black'>{product.title}</h1>
                            {/* price */}
                            <div className='flex gap-5 justify-between'>
                                <p className='text-gray-500'><s>₹{product.price + 400}</s></p>
                                <p>₹{product.price}</p>
                            </div>

                            {/* discription */}
                            <div>
                                <p>{product.desc}</p>
                            </div>

                            {/* color  */}
                            <div className='flex'>
                                {product?.color.map((color) => {
                                    if (color == "black" || color == "white") {
                                        return <button key={color} className={`border-2 border-gray-300 ml-1 bg-${color} rounded-full w-6 h-6 focus:outline-none`
                                        }></button>
                                    } else {
                                        return <button key={color} className={`border-2 border-gray-300 ml-1 bg-${color}-500 rounded-full w-6 h-6 focus:outline-none`
                                        }></button>
                                    }
                                })}
                            </div>

                            {/* size */}
                            <div className='flex'>
                                {product.size.map((item, i) => {
                                    return <span key={i} className='border border-gray-300 px-1 mx-1'>{item}</span>
                                })
                                }
                            </div>

                            {/* buttons  */}
                            <div className='lg:flex-row flex flex-col md:gap-4 gap-2 justify-between'>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-2 sm:py-2 sm:px-3 focus:outline-none hover:bg-indigo-600 rounded"><AiTwotoneThunderbolt className='mt-1 mx-2 hidden md:flex text-center' /><p className='text-center w-full'>Buy Now</p></button>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-2 sm:py-2 sm:px-3 focus:outline-none hover:bg-indigo-600 rounded"><BsFillCartFill className='mt-1 hidden md:flex text-center' />Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </Animate>
            </div>
        </div>
    )
}

export default QuickView