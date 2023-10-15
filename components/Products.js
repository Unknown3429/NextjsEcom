import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Carousel from 'react-grid-carousel'


const Collection = ({ category }) => {

    const [product, setProduct] = useState([])
    let p = []
    let c = []

    const handleimg = async () => {
        const img = await fetch("http://localhost:3000/api/getCollection", {
            method: 'POST',
            body: category
            // Adding headers to the request
        })
        let res = await img.json()
        p = Object.keys(res["tshirts"])?.filter((item) => {
            return c.push(res["tshirts"][item])
        })
        setProduct(c)
    }

    useEffect(() => {
        handleimg()
    }, [])

    if (!product) {
        return (
            <div className="relative flex rounded-xl bg-clip-border h-[50vh]">
                <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <Skeleton className="object-cover object-center w-full h-[50vh]" />
                    </div>
                </div>
                <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <Skeleton className="object-cover object-center w-full h-[50vh]" />
                    </div>
                </div>
                <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <Skeleton className="object-cover object-center w-full h-[50vh]" />
                    </div>
                </div>

            </div>
        )
    }

    // console.log(product[0].img);
    return (
        <>
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-900">{category.toUpperCase()} Collection</h1>
            <Carousel cols={2} rows={1} gap={8} loop
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
                            <div className="my-5" key={i}>
                                <img className="h-[55vh]" width="90%" src={item?.img} />
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
        // <div>
        //     <div className="flex flex-wrap w-full my-10">
        //         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        //             <h1 className="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-900">{category.toUpperCase()} Collection</h1>
        //             <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        //         </div>
        //     </div>
        //     <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 relative flex rounded-xl bg-clip-border h-[50vh]" data-taos-offset="300" >
        //         {product && product?.map((item, i) => {
        //             return <div key={i} className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        //                 <div className=" relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700" >
        //                     <img
        //                         src={item?.img}
        //                         className="object-cover object-center h-full w-full image"
        //                     />
        //                 </div>

        //             </div>
        //         })}
        //     </div>
        // </div >
    )
}



export default Collection