import React from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const checkout = ({ cart, clearCart, removeFromCart, addToCart, subTotal }) => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Checkout</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <h2 className='text-xl font-bold mb-4'>1. Dilevery Detailes</h2>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                  <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>


              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              {/* cart review  */}

              <h2 className='text-xl font-bold my-8'>2. Review Your Cart  </h2>
              <div className="p-2 w-full border-t border-gray-200 row">
                {Object.keys(cart).map((k) => {
                  return <div key={k}>
                    <div className="cart-item">
                      <div className="cart_heading grid grid-five-column">
                        <div className="cart-image--name">
                          <div>
                            fig
                            <figure>
                              {/* <img src={image} alt={id} /> */}
                            </figure>
                          </div>

                          <div>
                            <p>{cart[k].name}</p>
                            <div className="color-div">
                              <p>Color: {<button className={`border-2 border-gray-300 ml-1 bg-${cart[k].variant}-500 rounded-full w-4 h-4 focus:outline-none`}></button>}</p>
                            </div>
                          </div>
                        </div>

                        {/* price  */}
                        <div className="cart-hide">
                          <p> ₹{cart[k].price}</p>
                        </div>

                        <div >
                          <div className="cart-button">
                            <div className="amount-toggle">
                              <button >
                                <FaMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />
                              </button>
                              <div className="amount-style">{cart[k].qty}</div>
                              <button >
                                <FaPlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="card-hide">
                          <p>₹{subTotal}</p>
                        </div>

                      </div>
                    </div>
                    <hr />
                  </div>
                })}
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay ₹{subTotal}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
         padding: 9rem 0;

         .contain{
            padding:0 2rem;
         }

         .grid-four-column {
           grid-template-columns: repeat(4, 1fr);
         }
       
         .grid-five-column {
           grid-template-columns: repeat(4, 1fr) 0.3fr;
           text-align: center;
           align-items: center;
         }
         .cart-heading {
           text-align: center;
           text-transform: uppercase;
         }
         hr {
           margin-top: 1rem;
         }
         .cart-item {
           
           display: flex;
           flex-direction: column;
           gap: 3.2rem;
         }
       
         .cart-user--profile {
           display: flex;
           justify-content: flex-start;
           align-items: center;
           gap: 1.2rem;
           margin-bottom: 5.4rem;
       
           img {
             width: 8rem;
             height: 8rem;
             border-radius: 50%;
           }
           h2 {
             font-size: 2.4rem;
           }
         }
         .cart-user--name {
           text-transform: capitalize;
         }
         .cart-image--name {
           /* background-color: red; */
           align-items: center;
           display: grid;
           gap: 1rem;
           grid-template-columns: 0.4fr 1fr;
           text-transform: capitalize;
           text-align: left;
           img {
             max-width: 5rem;
             height: 5rem;
             object-fit: contain;
             color: transparent;
           }
       
           .color-div {
             display: flex;
             align-items: center;
             justify-content: flex-start;
             gap: 1rem;
       
             .color-style {
               width: 1.4rem;
               height: 1.4rem;
       
               border-radius: 50%;
             }
           }
         }
       
         .cart-two-button {
           margin-top: 2rem;
           display: flex;
           justify-content: space-between;
       
           .btn-clear {
             background-color: #e74c3c;
           }
         }
       
         .amount-toggle {
           display: flex;
           justify-content: center;
           align-items: center;
           gap: 2.4rem;
           font-size: 1.4rem;
       
           button {
             border: none;
             background-color: #fff;
             cursor: pointer;
           }
       
           .amount-style {
             font-size: 2.4rem;
             color:  => theme.colors.btn};
         }
         }
       
         .remove_icon {
           font-size: 1.6rem;
           color: #e74c3c;
           cursor: pointer;
         }
       
         .order-total--amount {
           width: 100%;
           margin: 4.8rem 0;
           text-transform: capitalize;
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           align-items: flex-end;
       
           .order-total--subdata {
             border: 0.1rem solid #f0f0f0;
             display: flex;
             flex-direction: column;
             gap: 1.8rem;
             padding: 3.2rem;
           }
           div {
             display: flex;
             gap: 3.2rem;
             justify-content: space-between;
           }
       
           div:last-child {
             background-color: #fafafa;
           }
       
           div p:last-child {
             font-weight: bold;
             color: ;
           }
         }
       
         @media (max-width: 998px){
           .grid-five-column {
             grid-template-columns: 1.5fr 1fr 0.5fr;
           }
           .cart-hide {
             display: none;
           }
         
       
           .cart-two-button {
             margin-top: 2rem;
             display: flex;
             justify-content: space-between;
             gap: 2.2rem;
           }
       
           .order-total--amount {
             width: 100%;
             text-transform: capitalize;
             justify-content: flex-start;
             align-items: flex-start;
       
             .order-total--subdata {
               width: 100%;
               border: 0.1rem solid #f0f0f0;
               display: flex;
               flex-direction: column;
               gap: 1.8rem;
               padding: 3.2rem;
             }
           }
         }
      `}</style>
    </div>
  )
}

export default checkout