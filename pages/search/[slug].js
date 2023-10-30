import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Image from 'next/image';



const Search = ({ mode }) => {
    const [queryProducts, setQueryProducts] = useState()
    const router = useRouter()


    const Products = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/searchApi`);
        const resJson = await res.json()
        setQueryProducts(resJson.searchProducts)

    }
    const filterTitle = queryProducts?.filter((curElem) => {
        return curElem.slug.toLowerCase().includes(router?.query.slug);
    });

    // const filterDesc = queryProducts?.filter((curElem) => {
    //     return curElem.desc.toLowerCase().includes(router?.query.slug);
    // });

    const filterProducts = queryProducts?.filter((curElem) => {
        return curElem.category.toLowerCase().includes(router?.query.slug);
    });


    // adding all filters in one array 
    const serachedProducts = filterProducts?.concat(filterTitle)
    // console.log(serachedProducts[0].size);

    var newArray = [];
    newArray.push.apply(newArray, filterTitle);
    newArray.push.apply(newArray, serachedProducts);
    useEffect(() => {
        Products()
    }, [])

    if (serachedProducts?.length <= 0) {
        return (<div className='min-h-screen'><div className={mode ? 'flex bg-[#232D3F] flex-col min-h-screen text-center items-center pt-20 md:pt-32' : "flex flex-col min-h-screen text-center items-center pt-20 md:pt-32 "}>
            <Image src={'/notFound.png'}
                width={500}
                height={500}
                alt="No Products Added In Cart" />
            <h1 className={mode ? 'text-[#e9e7ee] font-semibold' : "font-semibold"}>No items found for search term <span className='font-semibold'><i>{router?.query.slug}</i></span></h1>
        </div></div>)
    }
    return (

        <section className={mode ? `text-gray-300 body-font min-h-screen bg-[#232D3F]` : `text-gray-600 body-font min-h-screen`}>
            <div className="container px-5 py-16 mx-auto">
                <h2 className={mode ? 'text-center mb-10 text-2xl text-[#e9e7ee]' : "text-center mb-10 text-2xl text-black"}>Result For serch term <span className='font-semibold'><i>{router?.query.slug}</i></span></h2>
                <div className="flex flex-wrap   justify-center">
                    {serachedProducts?.map((item, i) => {
                        const pureColor = item?.color
                        return <Fade key={i} bottom>
                            <div className=" lg:w-1/4 md:w-1/2 p-4 w-full shadow-md mb-10 max-w-xs transition duration-300 ease-in-out hover:scale-110">

                                <Link href={`/products/${item?.slug}`} className="  rounded overflow-hidden ">
                                    <img alt="ecommerce" className="m-auto w-[86vw] object-cover md:h-[45vh] md:w-[100vw]" src={item?.img} />
                                </Link>

                                <Link href={`/products/${item?.slug}`}>
                                    <div className="mt-4">
                                        <h3 className={mode ? "text-gray-200 text-xs tracking-widest title-font mb-1" : "text-gray-500 text-xs tracking-widest title-font mb-1"}>{item?.category}</h3>
                                        <h2 className={mode ? "text-[#e9e7ee] title-font text-lg font-medium" : "text-gray-900 title-font text-lg font-medium"}>{item?.title}</h2>
                                        <p className="mt-1">₹{item?.price}</p>
                                        <div className="mt-1">
                                            {<span className='border border-gray-300 px-1 mx-1'>{item?.size}</span>}
                                        </div>
                                        <div className="mt-3">

                                            {pureColor == "black" || pureColor == "white" ?
                                                <button key={i} className={`border-2 border-gray-300 ml-1 bg-${pureColor} rounded-full w-6 h-6 focus:outline-none`
                                                }></button>
                                                :
                                                <button key={i} className={`border-2 border-gray-300 ml-1 bg-${pureColor}-500 rounded-full w-6 h-6 focus:outline-none`
                                                }></button>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Fade>
                    })}

                </div>
            </div >
        </section >
    )
}

export default Search