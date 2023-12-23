import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../model/Product'
import Fade from 'react-reveal/Fade';
import Head from 'next/head';


const Caps = ({ products, mode }) => {


  return (
    <div>
      <Head>
        <title>Wear The Comfort-Caps Collection</title>
      </Head>
      <section className={mode ? `text-gray-300 body-font min-h-screen bg-[#232D3F]` : `text-gray-600 body-font min-h-screen`}>
        <div className="container px-5 py-16 mx-auto">
          <h2 className={mode ? 'text-center mb-10 text-2xl text-[#e9e7ee]' : "text-center mb-10 text-2xl text-black"}>Caps-collection</h2>
          <div className="flex flex-wrap  justify-center">
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

          </div>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: "caps" })
  let caps = {};
  for (let item of products) {
    if (item?.title in caps) {
      if (!caps[item.title].color.includes(item?.color) && item?.availableQty > 0) {
        caps[item.title]?.color?.push(item?.color)
      }

      if (!caps[item.title].size.includes(item?.size) && item?.availableQty > 0) {
        caps[item.title].size.push(item?.size)
      }
    }

    else {
      caps[item?.title] = JSON.parse(JSON.stringify(item))
      if (item?.availableQty > 0) {
        caps[item.title].color = [item.color];
        caps[item.title].size = [item.size];
      }
      else {
        caps[item.title].color = [];
        caps[item.title].size = [];
      }
    }

  }
  return {
    props: { products: JSON.parse(JSON.stringify(caps)) }
  }
}

export default Caps