import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Fade from 'react-reveal/Fade';
import Carousel from 'react-grid-carousel'
import Link from 'next/link'


const Collection = ({ category, mode }) => {

    const [product, setProduct] = useState([])
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
            <Fade bottom>
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
                                <Link href={`/products/${item?.slug}`} className="  rounded overflow-hidden ">
                                    <div className="w-full my-5 shadow-md bg-white max-w-xs transition duration-300 ease-in-out hover:scale-105 cursor-pointer" key={i}>
                                        <img className="md:h-[35vh] w-full object-contain lg:h-[40vh] h-[50vh]" width="100%" src={item?.img} />
                                    </div>
                                </Link>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Fade>
        </>
    )
}



export default Collection