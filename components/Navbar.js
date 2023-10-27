import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi';
import { FaPowerOff, FaShoppingCart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BiUserCircle } from "react-icons/bi"
import { AiFillFolderAdd } from "react-icons/ai"
import { RiAccountPinBoxFill } from "react-icons/ri"
import { BsMoonStarsFill } from "react-icons/bs"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';



const Navbar = ({ key1, logout, user, setMode, mode }) => {
    const router = useRouter()
    useEffect(() => {
        setHburger(false)
        setIsOpen(false)
    }, [router.query])


    const [toggle, setToggle] = useState(null)
    const [hburger, setHburger] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-300`;



    return (
        <>

            <nav key={key1} className="text-gray-400 bg-gray-900 body-font sticky top-0 z-10">
                <div className="container mx-auto flex py-5 pl-5 justify-between flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">NextEcom</span>
                    </Link>

                    <button
                        className="flex flex-col mr-2 ml-24 mb-3 h-12 w-12 justify-center items-center group md:hidden"
                        onClick={() => {
                            setIsOpen(!isOpen)
                            setHburger(!hburger)
                        }}
                    >
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                    </button>

                    <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-lg justify-center">
                        <Link href={"/"} className="mr-5  hover:text-white">Home</Link>
                        <Link href={"/tshirts"} className="mr-5 hover:text-white">T-shirts</Link>
                        <Link href={"/hoodies"} className="mr-5 hover:text-white">Hoodies</Link>
                        <Link href={"/watches"} className="mr-5 hover:text-white">Watches</Link>
                        <Link href={"/caps"} className="mr-5 hover:text-white">Caps</Link>
                    </nav>

                    <button onClick={() => {
                        setMode(!mode)
                    }}
                        className="hidden mr-3 md:inline-flex items-center border-0 py-1 pl-3 focus:outline-none  rounded text-3xl mt-4 md:mt-0">
                        <BsMoonStarsFill className='hover:text-white' />
                    </button>

                    {user?.value &&
                        <button onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="hidden md:inline-flex items-center border-0 py-1 px-2 focus:outline-none  rounded text-4xl mt-4 md:mt-0"><BiUserCircle className='hover:text-white' />
                        </button>

                    }
                    {/* dropdown for account and login */}
                    {toggle && <div onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className='hidden absolute md:inline-flex top-16 px-10 py-3 rounded-md bg-white shadow-lg border text-gray-600 right-20'>
                        <ul>
                            <Link href={"/myaccount"}> <li className='py-1 text-lg cursor-pointer flex items-center hover:text-indigo-600'><RiAccountPinBoxFill className='mx-1' />account</li>
                            </Link>
                            <Link href={"/orders"}><li className='flex items-center first-line:py-1 text-lg cursor-pointer hover:text-indigo-600'><AiFillFolderAdd className='mx-1' />orders</li>
                            </Link>

                            <li onClick={logout} className='flex items-center py-1 text-lg cursor-pointer hover:text-indigo-600'><FaPowerOff className='mx-1' /> logout</li>
                        </ul>
                    </div>}

                    {!user?.value &&
                        <Link href={"/login"}>
                            <button className="px-4 py-3 md:py-2 text-sm mb-3 md:mb-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                Login
                            </button>
                        </Link>
                    }

                    <Link href={"/cart"}>
                        <button className="hidden mr-3 md:inline-flex items-center border-0 py-1 pl-3 focus:outline-none  rounded text-3xl mt-4 md:mt-0"><FiShoppingCart className='hover:text-white' />
                        </button>
                    </Link>

                </div >

                {/* <!-- component --> */}
                {hburger && < div className='flex justify-end z-50 sticky' >
                    <div className='absolute top-22 '>
                        <div className="flex w-full h-[100vh] max-w-xs p-10 bg-gray-800 left-0 transition ease transform duration-300">
                            <ul className="flex flex-col w-full">
                                <li className="my-px">
                                    <Link href={"/"} className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                                        <span className="ml-3">Home</span>
                                    </Link>
                                </li>
                                <li className="my-px">
                                    <Link href={"/tshirts"} className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                                        <span className="ml-3">tshirts</span>
                                    </Link>
                                </li>
                                <li className="my-px">
                                    <Link href={"/hoodies"} className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                                        <span className="ml-3">Hoodies</span>
                                    </Link>
                                </li>
                                <li className="my-px">
                                    <Link href={"/watches"} className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                                        <span className="ml-3">Watches</span>
                                    </Link>
                                </li>
                                <li className="my-px">
                                    <Link href={"/caps"} className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                                        <span className="ml-3">Caps</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                }
            </nav >




            {/* bottom navigation bar  */}
            < div className="fixed md:hidden z-50 w-full h-16 -translate-x-1/2 bg-white border border-gray-200 bottom-0 left-1/2 dark:bg-gray-900 dark:border-gray-600" >
                <div className="grid h-full grid-cols-5 mx-auto">
                    <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <Link href={"/"}>
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                        </Link>
                        <span className="sr-only">Home</span>
                    </button>
                    <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Home
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <BsMoonStarsFill onClick={() => {
                            setMode(!mode)
                        }}
                            className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500' />
                        <span className="sr-only">mode</span>
                    </button>
                    <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        mode
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <button data-tooltip-target="tooltip-Cart" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <Link href={"/cart"}>
                            <FaShoppingCart className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500' />
                        </Link>
                        <span className="sr-only">Cart</span>
                    </button>


                    <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <FaMagnifyingGlass className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500' />
                        <span className="sr-only">Search</span>
                    </button>
                    <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Settings
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <button onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="sr-only">Profile</span>
                    </button>

                    {toggle && <div onMouseOver={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className='absolute bottom-16 right-0 px-10 py-4 rounded-md bg-white shadow-lg border text-gray-600'>
                        <ul>
                            <Link href={"/myaccount"}> <li className='py-1 text-lg cursor-pointer flex items-center hover:text-indigo-600'><RiAccountPinBoxFill className='mx-1' />account</li>
                            </Link>
                            <Link href={"/orders"}><li className='flex items-center first-line:py-1 text-lg cursor-pointer hover:text-indigo-600'><AiFillFolderAdd className='mx-1' />orders</li>
                            </Link>

                            <li onClick={logout} className='flex items-center py-1 text-lg cursor-pointer hover:text-indigo-600'><FaPowerOff className='mx-1' /> logout</li>
                        </ul>
                    </div>}
                    <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Profile
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar