import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";


const cart = ({ cart, clearCart, removeFromCart, addToCart, subTotal, saveCart }) => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/');
    }
  }, [])

  return (

    <div key={subTotal} className="">
      <div className="contain md:px-5 mt-10 md:h-[83vh]">
        <div className="p-2 w-full row">
          <div className="cart_heading grid grid-five-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">SubTotal</p>
          </div>
          <hr />

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


          <div className="cart-two-button">
            <Link href={"/checkout"}>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded">CHECKOUT</button>
            </Link>

            <button onClick={clearCart} className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-4 px-6 focus:outline-none hover:bg-red-600 rounded">CLEAR CART</button>
          </div>
        </div>

        {/* order Total  */}
        <div className="order-total--amount">
          <div className="order-total--subdata p-10 w-[20vw]">

            <div>
              <p>SubTotal:</p>
              <p>₹500</p>
            </div>

            <div>
              <p>Shipping-Fee:</p>
              <p>₹50</p>
            </div>

            <hr />
            <div>
              <p>Oredr Total:</p>
              <p>₹550</p>
            </div>

          </div>
        </div>



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
           padding: 3.2rem 0;
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
           gap: 1.2rem;
           font-size: 1rem;
       
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
    </div>
  )
}

export default cart