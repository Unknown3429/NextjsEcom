import Link from 'next/link';
import React, { useState } from 'react'

const Searchbar = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const handlechange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value)
  }
  return (
    <div>
      {/* <div className={`relative flex flex-col p-2 py-6 m-h-screen `}> */}
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" >
          <div>
            <div onClick={() => setSearch(false)} className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <input onChange={handlechange} className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" name='search' type="text" placeholder="Search 1000+ Products" />

          <Link onClick={() => setSearch(false)} href={`/search/${searchQuery}`}>
            <div className="bg-gray-600 p-2 hover:bg-indigo-400 cursor-pointer mx-2 rounded-full">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
          </Link>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Searchbar