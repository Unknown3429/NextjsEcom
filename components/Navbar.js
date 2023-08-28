import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import { BiUserCircle } from "react-icons/bi"
import { AiFillFolderAdd } from "react-icons/ai"
import { RiAccountPinBoxFill } from "react-icons/ri"
import { useReducer, useState } from 'react';



const Navbar = ({ key1, logout, user }) => {
    // console.log(user?.value);
    const [toggle, setToggle] = useState(null)
    return (
        <nav key={key1} className="text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap py-5 pl-5 flex-col md:flex-row items-center">
                <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">NextEcom</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
                    <Link href={"/"} className="mr-5  hover:text-white">Home</Link>
                    <Link href={"/tShirts"} className="mr-5 hover:text-white">T-shirts</Link>
                    <Link href={"/hoodies"} className="mr-5 hover:text-white">Hoodies</Link>
                    <Link href={"/mugs"} className="mr-5 hover:text-white">Mugs</Link>
                    <Link href={"/mousepad"} className="mr-5 hover:text-white">Mouse Pad</Link>
                </nav>

                {user?.value &&
                    <button onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="inline-flex items-center border-0 py-1 px-3 focus:outline-none  rounded text-4xl mt-4 md:mt-0"><BiUserCircle className='hover:text-white' />
                    </button>

                }
                {/* dropdown for account and login */}
                {toggle && <div onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className='absolute top-16 px-10 py-4 rounded-md bg-white shadow-lg border text-gray-600 right-20'>
                    <ul>
                        <li className='py-1 text-lg cursor-pointer flex items-center hover:text-indigo-600'><RiAccountPinBoxFill className='mx-1' />account</li>

                        <Link href={"/orders"}><li className='flex items-center first-line:py-1 text-lg cursor-pointer hover:text-indigo-600'><AiFillFolderAdd className='mx-1' />orders</li>
                        </Link>

                        <li onClick={logout} className='flex items-center py-1 text-lg cursor-pointer hover:text-indigo-600'><FaPowerOff className='mx-1' /> logout</li>
                    </ul>
                </div>}

                {!user?.value &&
                    <Link href={"/login"}>
                        <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                            Login
                        </button>
                    </Link>
                }

                <Link href={"/cart"}>
                    <button className="inline-flex items-center border-0 py-1 pl-3 focus:outline-none  rounded text-3xl mt-4 md:mt-0"><FiShoppingCart className='hover:text-white' />
                    </button>
                </Link>

            </div>
        </nav >

    )
}

export default Navbar