import React, { useState } from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Script from 'next/script';
// const Razorpay = require('razorpay');

const checkout = ({ cart, clearCart, removeFromCart, addToCart, subTotal }) => {

  // for validation 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [resData, setResData] = useState('')
  const [disabled, setDisabled] = useState(true);



  const handleChange = async (e) => {


    if (e.target.name == "name") {
      setName(e.target.value)
    }

    else if (e.target.name == "email") {
      setEmail(e.target.value)
    }

    else if (e.target.name == "address") {
      setAddress(e.target.value)
    }

    else if (e.target.name == "pincode") {
      setPincode(e.target.value)

      // check city and state 
      const pins = await fetch("http://localhost:3000/api/pin");
      const pinJson = await pins.json()

      if (Object.keys(pinJson).includes(e.target.value)) {
        if (e.target.value.length == 6) {
          setCity(pinJson[e.target.value][0])
          setState(pinJson[e.target.value][1])
        }
        else {
          setCity("");
          setState("")
        }
      }
      else {
        setCity("");
        setState("")
      }
    }

    else if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    setTimeout(() => {
      // console.log(phone.length);
      if (name.length > 4 && email.includes("@") && email.length > 4 && address.length > 5 && pincode.length == 6 && phone.length == 10) {
        setDisabled(false)
      }
      else {
        setDisabled(true)
      }
    }, 1000);

  }

  // for calling razorPay api 
  const handlePay = async (amount) => {
    const body = { email, phone, address, subTotal,  cart }
    const data = await fetch("http://localhost:3000/api/razorpay", {
      method: 'POST',
      body: JSON.stringify(body)
      // Adding headers to the request
    }
    )
    // razor pay functions and detailes 
    var options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
      "amount": subTotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": data?.currency,
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      // "callback_url": 'https://your-server/callback_url',
      "redirect": true,
      // "image": "https://example.com/your_logo",
      // "order_id": data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `http://localhost:3000/api/afterPayment`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
      },
      "theme": {
        "color": "#6366f1"
      }
    };
    const paymentObject = new Razorpay(options);
    // console.log(paymentObject);
    paymentObject.open()
  }
  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
                  <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea onChange={handleChange} value={address} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input onChange={handleChange} value={phone} type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 zfocus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                  <input type="text" onChange={handleChange} value={city} id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" onChange={handleChange} value={state} id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={true} />
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
                <button disabled={disabled} onClick={() => handlePay(subTotal)} className=" disabled:bg-indigo-400 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay ₹{subTotal}</button>
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