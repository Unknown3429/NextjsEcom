import { useRouter } from 'next/router'
import Order from '../model/Order'
import mongoose from 'mongoose';
import Image from 'next/image';
import { useEffect } from 'react';



const MyOrder = ({ order, clearCart }) => {
    const router = useRouter();
    // console.log(order);
    const products = order.products
    useEffect(() => {
        console.log(router.query?.clearcart);
        if (router.query?.clearcart == 1) {
            clearCart()
            console.log("cart is clear");
        }
    }, [])
    
    return (
        <section className="text-gray-600 body-font overflow-hidden md:h-[90vh]">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">NextEcom.com</h2>
                        <h3 className="text-gray-900 text-2xl title-font font-medium pt-2 mb-4">OrderId: {order?.O_id}</h3>
                        <p className="leading-relaxed mb-4">Your order successfully placed.</p>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-500  py-2 text-lg px-1">Item Description</a>
                            <a className="flex-grow  border-gray-300 py-2 text-lg px-1">Quantity</a>
                            <a className="flex-grow  border-gray-300 py-2 text-lg px-1">SubTotal</a>
                        </div>

                        {Object.keys(products)?.map((key) => {
                            return <div key={key} div className="flex border-b mb-6 border-gray-200 py-2">
                                <span className="  text-gray-900">{products[key]?.name}</span>
                                <span className="mx-auto pl-10 text-gray-900">{products[key]?.qty}</span>
                                <span className="mx-auto  text-gray-900">₹{(products[key]?.price) * (products[key]?.qty)}</span>
                            </div>
                        })}

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">₹{order?.amount}.00</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
                        </div>
                    </div>
                    <img className="lg:w-1/2 w-full lg:h-auto h-80 object-cover object-center rounded"
                        src={"/order.jpg"} alt='main'
                    />

                </div>
            </div>
        </section >
    )
}

export const getServerSideProps = async (context) => {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let order = await Order.findById(context.query.id)


    return {
        props: { order: JSON.parse(JSON.stringify(order)) }
    }
}

export default MyOrder