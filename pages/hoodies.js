import Link from 'next/link'
import mongoose from 'mongoose'
import Fade from 'react-reveal/Fade';

import Product from '../model/Product'
import Head from 'next/head';
import { CiFilter } from "react-icons/ci";
import { useState } from 'react';


const Hoodies = ({ products, mode, image }) => {
  // console.log(products);
  const [minval, setMinval] = useState(0)
  const [maxval, setMaxval] = useState(1000)
  const [value, setValue] = useState(1000)
  const [filter, setFilter] = useState(false)


  const handleChangeVal = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    console.log(value);
  }
  return (
    <div>
      <Head>
        <title>Wear The Comfort-Hoodies Collection</title>
      </Head>
      <section className={mode ? `text-gray-300 body-font min-h-screen bg-[#232D3F]` : `text-gray-600 body-font min-h-screen`}>
        <div className="container px-5 py-10 mx-auto">
          <h2 className={mode ? 'text-center mb-10 text-2xl text-[#e9e7ee]' : "text-center mb-10 text-2xl text-black"}>Hoodies-collection</h2>
          <div className='md:w-[70vw] w-[90vw] md:hidden grid-cols-2 grid gap-2 h-[5vh]'>
            <div className='hidden md:flex'>Tshirt</div>
            <div className='text-center'> {Object.values(products)?.length} Product Available</div>
            <div className='text-right md:mr-8'>
              <select name="cars" id="cars" className='hidden md:block'>
                <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
              </select>
              <div className='w-full m-auto flex justify-end items-center mr-3'>
                <CiFilter onClick={() => { setFilter(!filter) }} className='text-3xl font-bold' />
              </div>
            </div>
          </div>
          <div className='flex md:flex-row flex-col w-[95vw]'>
            {/* filter  */}
            <div className={filter ? `md:w-[25vw] w-[90vw] flex flex-col gap-8 ml-5 md:ml-0 mb-5 md:mb-0` : "mb-5 md:mb-0 hidden md:w-[25vw] w-[90vw] ml-5 md:ml-0 md:flex flex-col gap-8 "}>
              {/* category */}
              <div className='w-36'>
                <h2 className='text-xl text-black/80 font-semibold my-2'>Category</h2>
                <div className=' flex flex-col gap-3 mt-5'>
                  {image.img?.map((cat, i) => {
                    return (<p key={i} className='hover:underline cursor-pointer transition-all duration-300 text-base hover:translate-x-1 hover:text-indigo-600 text-black/70 font-medium '>{cat.category.toUpperCase()}</p>)
                  })}
                </div>
              </div>

              {/* priceFilter  */}
              <div>
                <h2 className='text-xl text-black/80 font-semibold my-2'>Price</h2>
                <div className="flex flex-col w-36 gap-3">
                  <span>₹{(Math.round(value * 100) / 100).toFixed(2)}</span>
                  <input
                    type="range"
                    min={minval}
                    max={maxval}
                    value={value}
                    onChange={handleChangeVal}
                    classname={``}
                  />
                </div>
              </div>


              {/* clear filter  */}
              <div>
                <button className="lg:mt-8 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-4 px-6 focus:outline-none hover:bg-red-400 rounded">CLEAR FILTER</button>
              </div>
            </div>

            {/* products */}
            <div>

              <div className='md:w-[70vw] grid-cols-2 lg:grid-cols-3 grid gap-2 mx-5'>
                {Object.keys(products)?.map((item, i) => {
                  return <div key={i}>
                    <div className='lg:w-[20vw] pb-5 shadow-md rounded-sm'>
                      {/* image  */}
                      <div>
                        <Link href={`/products/${products[item]?.slug}`}>
                          <img src={products[item]?.img} className='rounded-sm w-full object-contain' alt="" />
                        </Link>
                      </div>
                      {/* text  */}
                      <Link href={`/products/${products[item]?.slug}`}>
                        <div className='md:ml-6 my-3 md:items-start flex flex-col items-center'>
                          <p>{products[item]?.category}</p>
                          {/* heading */}
                          <div className='md:text-xl font-semibold text-black/80' >
                            <h2>{products[item]?.title.slice(0, 20)}</h2>
                          </div>
                          {/* Price */}
                          <div className='text-black/80 flex gap-4' >
                            <p className='text-black/40'><s>₹{products[item]?.price + 299}</s></p>
                            <h2>₹{products[item]?.price}</h2>
                          </div>
                          {/* size  */}
                          <div className='flex mt-2 flex-wrap'>
                            {products[item].size.map((size, i) => {
                              return <div key={i}>
                                <span className='border border-gray-300 px-1  mx-1'>{size}</span>
                              </div>
                            })}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                })}

              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap  justify-center">
            {Object.keys(products)?.map((item) => {
              const pureColor = products[item]?.color
              return <Fade key={products[item]._id} >
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md mb-10 ">

                  <Link href={`/products/${products[item]?.slug}`} className="  rounded overflow-hidden ">
                    <img alt="ecommerce" className="m-auto w-[86vw] object-cover md:h-[45vh] md:w-[100vw]" src={products[item]?.img} />
                  </Link>

                  <Link href={`/products/${products[item]?.slug}`}>
                    <div className="mt-4">
                      <h3 className={mode ? "text-gray-200 text-xs tracking-widest title-font mb-1" : "text-gray-500 text-xs tracking-widest title-font mb-1"}>{products[item]?.category}</h3>
                      <h2 className={mode ? "text-[#e9e7ee] title-font text-lg font-medium" : "text-gray-900 title-font text-lg font-medium"}>{products[item]?.title}</h2>
                      <p className="mt-1">₹{products[item]?.price}</p>
                      <div className="mt-1">
                        {products[item]?.size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                        {products[item]?.size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                        {products[item]?.size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                        {products[item]?.size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                        {products[item]?.size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                      </div>
                      <div className="mt-3">
                        {pureColor?.map((color) => {
                          if (color == "black" || color == "white") {
                            return <button key={color} className={`border-2 border-gray-300 ml-1 bg-${color} rounded-full w-6 h-6 focus:outline-none`
                            }></button>
                          } else {
                            return <button key={color} className={`border-2 border-gray-300 ml-1 bg-${color}-500 rounded-full w-6 h-6 focus:outline-none`
                            }></button>
                          }
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
            })}

          </div> */}
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: "hoodies" })
  let hoodies = {};
  for (let item of products) {
    if (item?.title in hoodies) {
      if (!hoodies[item.title].color.includes(item?.color) && item?.availableQty > 0) {
        hoodies[item.title]?.color?.push(item?.color)
      }

      if (!hoodies[item.title].size.includes(item?.size) && item?.availableQty > 0) {
        hoodies[item.title].size.push(item?.size)
      }
    }

    else {
      hoodies[item?.title] = JSON.parse(JSON.stringify(item))
      if (item?.availableQty > 0) {
        hoodies[item.title].color = [item.color];
        hoodies[item.title].size = [item.size];
      }
    }

  }
  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) }
  }
}

export default Hoodies