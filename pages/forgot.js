import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Forgot = () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/');
        }
    }, [])

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container flex pt-24 justify-center min-h-[90vh] px-6 mx-auto">
                <form className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <h1 className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b border-indigo-500 dark:border-indigo-400  dark:text-gray-300">
                            Forgot Password
                        </h1>
                    </div>


                    {/* <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>

          <h2 className="mx-3 text-gray-400">Profile Photo</h2>

          <input id="dropzone-file" type="file" className="hidden" />
        </label> */}

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                            Next
                        </button>

                        <div className="mt-6 text-center ">
                            <Link href="/login" className="text-sm text-indigo-500 hover:underline dark:text-indigo-400">
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Forgot