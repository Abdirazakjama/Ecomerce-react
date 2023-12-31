import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useShop, { shopContext } from '../shopContext'

function Hedaer() {
 const {products,ThemeChanger,apptheme} = useShop();
 let dark = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
 </svg>

 let light =  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
 
  return (
    <div className={`fixed top-0 left-0 right-0 ${apptheme === "dark" ?" bg-slate-700 text-black" : "bg-white text-black" } bg-opacity-60 backdrop-blur-md shadow z-10`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">

            <Link to="/" className={`text-xl font-semibold ${apptheme === "dark" ? " text-white" :"text-gray-800"}`}>Logo</Link>
            <ul className={`flex space-x-3 ${apptheme === "dark" ? " text-white" :"text-gray-800"}`}>
                <Link to="/" className="hover:text-pink-600" href="">Home</Link>
                <Link to="/Products" className="hover:text-pink-600" href="">Products</Link>
                <Link to="/About" className="hover:text-pink-600"  href="">About</Link>
                <Link to="/Contact" className="hover:text-pink-600" href="">Contact</Link>
               <div className='relative'>
               <Link to="/Cart" className="hover:text-pink-600" href="">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

<span className="absolute -top-1 -right-1 bg-pink-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
								{products.length}
							</span>
               </Link>
              
               </div>
               <button  onClick={()=>ThemeChanger(apptheme === "dark" ? "light":"dark")}>{apptheme === "dark" ? light : dark}</button>
            </ul>

        </div>
        
    </div>
  )
}

export default Hedaer