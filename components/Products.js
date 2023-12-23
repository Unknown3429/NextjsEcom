import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Fade from 'react-reveal/Fade';
import Carousel from 'react-grid-carousel'
import Link from 'next/link'

import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


const Collection = ({ category, mode }) => {

    const [product, setProduct] = useState([])

    const hover = "flex shadow-md relative rounded-sm justify-around py-2 text-2xl z-50 mx-auto -mt-12 bg-white w-52"
    const nHover = "hidden shadow-md relative rounded-sm justify-around py-2 text-2xl z-50 mx-auto -mt-12 bg-white w-52"
    const [modal, setModal] = useState(nHover)

    const [sk, setSk] = useState(false)
    let p = []
    let c = []
    const handleimg = async () => {
        const img = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getCollection`, {
            method: 'POST',
            body: category
            // Adding headers to the request
        })
        let res = await img.json()
        p = Object.keys(res["tshirts"])?.filter((item) => {
            return c.push(res["tshirts"][item])
        })
        setProduct(c)
        setSk(true)
    }

    useEffect(() => {
        handleimg()
    }, [])

    if (!sk) {
        return (
            <Carousel cols={4} rows={1} gap={5} loop
                mobileBreakpoint={670}
                responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3
                    },
                    {
                        breakpoint: 990,
                        cols: 2
                    }
                ]}>
                <Carousel.Item >
                    <div className="mb-5" >
                        <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="mb-5" >
                        <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="mb-5" >
                        <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="mb-5" >
                        <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    }


    return (
        <>
            <div className="text-center my-10">
                <h1 className={mode ? `sm:text-3xl text-2xl font-medium title-font text-[#e9e7ee] mb-2` : "sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2"}>{category.toUpperCase()}</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <Carousel cols={4} rows={1} loop
                mobileBreakpoint={670}
                responsiveLayout={[
                    {
                        breakpoint: 1200,
                        cols: 3
                    },
                    {
                        breakpoint: 990,
                        cols: 2
                    }
                ]}>
                {product && product?.map((item, i) => {
                    return (
                        <Carousel.Item key={i} >
                            <Fade >
                                <Link href={`/products/${item?.slug}`}
                                    onMouseOver={() => { setModal(hover) }}
                                    onMouseLeave={() => { setModal(nHover) }}
                                    className="  rounded overflow-hidden  ">
                                    <div
                                        className="w-full my-5 shadow-md bg-white max-w-xs transition duration-300 ease-in-out  cursor-pointer" key={i}>
                                        <div
                                            className="md:h-[35vh] lg:h-[40vh] z-0 h-[50vh] hover:scale-105 transition duration-500 ease-in-out w-full">
                                            <img className="object-contain md:h-[35vh] lg:h-[40vh] z-0 h-[50vh] hover:scale-105 transition duration-500 ease-in-out w-full" width="100%" src={item?.img} />
                                            <Fade >
                                                <span className={`${modal} transition duration-500 ease-in-out `}>
                                                    <CiHeart className="hover:text-indigo-800 font-bold" />
                                                    <IoCartOutline className="hover:text-indigo-800 font-bold" />
                                                </span>
                                            </Fade>
                                        </div>
                                        <span className="flex justify-center items-center text-sm flex-col py-5 text-black/70 font-semibold hover:text-black/80 transition duration-300 ease-in ">
                                            <p className="px-2">{item?.title}</p>
                                            <p className="px-2">₹{item?.price}</p>
                                        </span>
                                    </div>
                                </Link>
                            </Fade >
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}



export default Collection