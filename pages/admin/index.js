import Head from 'next/head';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  const [form, setForm] = useState({})

  const handleChange = async (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value })

  }
  const addProduct = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/addProducts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([form])
    })
    const res = await data.json()
    console.log(res)
    if (res.success) {
      toast.success(`Product added successfully`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }

    if (!res.success) {
      toast.error(`Please Enter Correct Detailes about yor product`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Wear The Comfort-Admin Pannel</title>
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen flex justify-center bg-center bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover items-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)" }}>
        <div className=" bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">Add new product</h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">Product Title <abbr title="required">*</abbr></label>
                      <input onChange={handleChange} value={form.title ? form.title : ""} placeholder="title" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="title" id="integration_shop_name" />
                      <p className="text-red text-xs hidden">Please fill out this field.</p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">Product Slug<abbr title="required">*</abbr></label>
                      <input onChange={handleChange} value={form.slug ? form.slug : ""} placeholder="Slug" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="slug" id="integration_shop_name" />
                      <p className="text-red text-xs hidden">Please fill out this field.</p>
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">Image Url</label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center  text-xl rounded-lg text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </span>
                      </div>
                      <input onChange={handleChange} name='img' value={form.img ? form.img : ""} type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://" />
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">Price</label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <input onChange={handleChange} name='price' value={form.price ? form.price : ""} type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="₹" />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">Product Category<abbr title="required">*</abbr></label>
                      <select onChange={handleChange} value={form.category ? form.category : ""} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="category" id="integration_city_id">
                        <option value="Tshirts">Tshirts</option>
                        <option value="hoodies">Hoodies</option>
                        <option value="watches">watches</option>
                        <option value="caps">Caps</option>

                      </select>
                      <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">Product Color</label>
                      <input onChange={handleChange} value={form.color ? form.color : ""} placeholder="Red" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="color" id="integration_street_address" />
                    </div>

                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">Product qty<abbr title="required">*</abbr></label>
                      <select onChange={handleChange} value={form.availableQty ? form.availableQty : ""} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="availableQty" id="integration_city_id">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">Product size<abbr title="required">*</abbr></label>
                      <select onChange={handleChange} value={form.size ? form.size : ""} className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="size" id="integration_city_id">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                    </div>
                  </div>
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">Description</label>
                    <textarea value={form.desc ? form.desc : ""} onChange={handleChange} required="" name="desc" id="" className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter Product info" spellCheck="false"></textarea>
                    <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
                  </div>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button onClick={addProduct} className="mb-2 md:mb-0 bg-indigo-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-500">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default index