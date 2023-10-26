import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myaccount = ({ user }) => {
    const router = useRouter()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [npassword, setNpassword] = useState('')


    useEffect(() => {
        if (!user) {
            router.push('/');
        }
        else if (user.value != null) {
            fetchUser(user.value)
        }
    }, [user.value])

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

        }

        else if (e.target.name == "phone") {
            setPhone(e.target.value)
        }

        else if (e.target.name == "password") {
            setPassword(e.target.value)
        }

        else if (e.target.name == "cpassword") {
            setCpassword(e.target.value)
        }

        else if (e.target.name == "npassword") {
            setNpassword(e.target.value)
        }

    }

    const fetchUser = async (token) => {
        let body = { token, address, phone, pincode }
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const res = await data.json()
        setName(res?.name)
        setPincode(res?.pincode)
        setPhone(res?.phone)
        setAddress(res?.address)
    }

    const handleUserSubmit = async () => {
        let body = { token: user.value, address, phone, pincode, name }
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const res = await data.json()
        if (res.success == true) {
            toast.success('Updated Successfully', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Error Occured', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handlePassSubmit = async () => {
        let body = { token: user.value, password, cpassword, npassword }
        let res;
        if (cpassword == npassword) {
            const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updatePass`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            res = await data.json()
        }
        else {
            res = { success: false }
        }
        if (res.success == true) {
            toast.success('Updated Successfully', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            toast.error('Error Occured', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setPassword('')
        setCpassword('')
        setNpassword('')
    }
    return (
        <section className="text-gray-600 body-font relative">
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl title-font font-bold mb-2 text-gray-900">Update Your Account</h1>
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
                        {user.value ? <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={handleChange} value={user?.email} readOnly={true} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div> : <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>}


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
                        <div className="p-2 w-full my-4">
                            <button onClick={handleUserSubmit} className="disabled:bg-indigo-400 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>

                    </div>

                    <h2 className='text-xl font-bold my-4'>2. Password</h2>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input onChange={handleChange} value={password} type="text" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password</label>
                                <input onChange={handleChange} value={npassword} type="text" id="npassword" name="npassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="cpassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                                <input onChange={handleChange} value={cpassword} type="text" id="cpassword" name="cpassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 /text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-2 w-full my-6">
                    <button onClick={handlePassSubmit} className="disabled:bg-indigo-400 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </div>

            </div>
        </section>
    )
}

export default myaccount