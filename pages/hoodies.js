import Link from 'next/link'
import mongoose from 'mongoose'

import Product from '../model/Product'

const Hoodies = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-16 mx-auto">
          <h2 className='text-center mb-10 text-2xl text-black'>Hoodies Collection</h2>
          <div className="flex flex-wrap -m-4">
            {Object.keys(products)?.length === 0 && <p>Curently hoodies is Not available new stock comming soon Stay Tuned</p>}
            {Object.keys(products)?.map((item) => {
              return <div key={products[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md mb-8 m-2">
                <Link href={`/products/${products[item]?.slug}`} className="  rounded overflow-hidden ">
                  <img alt="ecommerce" className=" h-96 md:h-{45vh} md:w-[100%] max-w-none" src={products[item]?.img} />
                </Link>
                <Link href={`/products/${products[item]?.slug}`}>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item]?.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item]?.title}</h2>
                    <p className="mt-1">₹{products[item]?.price}</p>
                    <div className="mt-1">
                      {products[item]?.size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                      {products[item]?.size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                      {products[item]?.size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                      {products[item]?.size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                      {products[item]?.size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                    </div>
                    <div className="mt-3">
                      {products[item]?.color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item]?.color.includes("white") && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item]?.color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item]?.color.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item]?.color.includes("indigo") && <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item]?.color.includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}

                    </div>
                  </div>
                </Link>
              </div>
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