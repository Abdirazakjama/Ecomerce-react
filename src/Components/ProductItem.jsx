import React from "react";
import { Link } from "react-router-dom";
import useShop from "../shopContext";


const ProductItem = ({product})=>{
  const {ThemeChanger,apptheme} = useShop();
    return <Link to={`/Product-details/${product.id}`} className={`border ${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-gray-800"} border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow-duration-200 ease-in`}>
    <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.name}></img>

    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">{product.title}</h2>
      <p className={`${apptheme === "dark" ? "text-white" :"text-gray-800"} mb-4 truncate`}>{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">
           ${product.price.toFixed()}
        </span>
        <div className={`text-sm ${apptheme === "dark" ? "text-white" :"text-gray-800"}`}>{product.stock > 0 ? `${product.stock} in stock` :"out of stock"}</div>

        
      </div>
      <div className="mt-4">
          <span className="text-yellow-500">
            {"★".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-300">
          {"★".repeat(Math.round(5 - product.rating))}
          </span>
        </div>
    </div>
  </Link>
}

export default ProductItem;