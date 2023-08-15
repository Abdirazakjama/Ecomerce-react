import React from 'react'
import { Link } from 'react-router-dom'

function Hedaer() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md shadow z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">

            <Link to="/" className="text-xl font-semibold text-gray-700">Logo</Link>
            <ul className="flex space-x-8 text-gray-700">
                <Link to="/" className="hover:text-pink-600" href="">Home</Link>
                <Link to="/Products" className="hover:text-pink-600" href="">Products</Link>
                <Link to="/About" className="hover:text-pink-600"  href="">About</Link>
                <Link to="/Contact" className="hover:text-pink-600" href="">Contact</Link>
               <div className='relative'>
               <Link to="/Cart" className="hover:text-pink-600" href="">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

   <span className='absolute -top-1 -right-1 bg-pink-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
    0
   </span>
               </Link>

               </div>
            </ul>

        </div>
        
    </div>
  )
}

export default Hedaer