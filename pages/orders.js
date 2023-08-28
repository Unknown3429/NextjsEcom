import React, { useEffect } from 'react'
import mongoose from 'mongoose'
import { useRouter } from 'next/router';

import Order from '../model/Order';

const Orders = ({ orders }) => {
  
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])
  return (
    <>
      <div className="relative overflow-x-auto min-h-[90vh]">
        <h1 className='text-center text-2xl font-semibold py-10'>My order</h1>
        <table className="w-full text-sm text-left text-gray-500  dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b dark:border-gray-300 dark:bg-white dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                White
              </td>
              <td className="px-6 py-4">
                Laptop PC
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr className="bg-white dark:bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                Black
              </td>
              <td className="px-6 py-4">
                Accessories
              </td>
              <td className="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>

  )
}

export const getServerSideProps = async (context) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let orders = await Order.find({})



  // console.log(product);


  return {
    props: { orders: orders }
  }
}


export default Orders