import React from 'react'
import useShop from '../shopContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const {products,ThemeChanger,apptheme} = useShop();

  return (
    <div className={`py-8 mt-16 border-t border-gray-200 ${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-gray-800"}`}>
      <div className={`max-w-4xl ${apptheme === "dark" ? "text-white" :"text-gray-800"} mx-auto text-center `}>
   <p className={`font-light mb-2'`}>thanks for visiting this website</p>
   <p className={`${apptheme === "dark" ? "text-white" :"text-gray-800"} font-semibold`} >
    Dugsiiye &copy; {currentYear}
   </p>
      </div>
    </div>
  )
}

export default Footer