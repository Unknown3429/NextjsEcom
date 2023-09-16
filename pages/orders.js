import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';


const MyOrders = ({ }) => {

  const router = useRouter()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetch("http://localhost:3000/api/myorders", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem('token') })
        // Adding headers to the request
      }
      )
      let res = await data.json()
      setOrders(res.orders)
    }

    if (!localStorage.getItem('token')) {
      router.push('/');
    }

    else {
      fetchOrders()
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
                #Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item) => {
              return <tr key={item._id} className="bg-white border-b dark:bg-white dark:border-gray-400">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                  <Link href={"/order?id=" + item._id}>
                    {item?.O_id}
                  </Link>
                </th>
                <td className="px-6 py-4">
                  {item?.email}
                </td>
                <td className="pl-6 py-4">
                  ₹{item?.amount}
                </td>
                <td className="px-6 py-4">
                  {item?.status}
                </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </>

  )
}

// export const getServerSideProps = async (context) => {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//   }

//   let orders = await Order.find({})



//   // console.log(product);


//   return {
//     props: { orders: orders }
//   }
// }


export default MyOrders