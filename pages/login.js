import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  useEffect(() => {
    if (localStorage.getItem('myuser')) {
      router.push('/');
    }
  }, [])


  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(body),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    let response = await res.json();
    setName(JSON.stringify(response.name))
    setEmail('');
    setPassword('');
    if (response.success) {
      console.log(response?.email, response?.token,);
      localStorage.setItem('myuser', JSON.stringify({ token: response?.token, email: response?.email }))
      toast.success(`${response.name} You are SignIn`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/")
      }, 2500);
    }

    if (!response.success) {
      toast.error(`${response.error}`, {
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


  const handleChange = (e) => {

    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value)
    }
  }

  return (
    <section className="bg-white dark:bg-gray-800">
      <Head>
        <title>Wear The Comfort-Login</title>
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
      <div className="container flex pt-24 justify-center min-h-[90vh] px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>

          <div className="flex items-center justify-center mt-6">
            <Link href="/login" className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b border-indigo-500 dark:border-indigo-400  dark:text-gray-300">
              sign in
            </Link>

            <Link href="/signup" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 dark:border-gray-400 dark:text-white">
              sign up
            </Link>
          </div>


          {/* <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>

          <h2 className="mx-3 text-gray-400">Profile Photo</h2>

          <input id="dropzone-file" type="file" className="hidden" />
        </label> */}

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>

            <input type="email" name='email' value={email || ''} onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input type="password" name='password' value={password || ''} onChange={handleChange} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
              Login
            </button>

            <div className="mt-6 text-center ">
              <Link href="/forgot" className="text-sm text-indigo-500 hover:underline dark:text-indigo-400">
                forgot Password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login