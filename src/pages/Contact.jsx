import React from 'react'
import useShop from '../shopContext'

function Contact() {
  const {ThemeChanger,apptheme} = useShop()
  return (
    <div className={`${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-black" }`}>Welcome to my website ecomerce </div>
  )
}

export default Contact