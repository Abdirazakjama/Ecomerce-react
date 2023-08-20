import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductsDetailsSkeleton from './ProductsDetailsSkeleton';
import useShop, { shopContext } from '../shopContext';

const ProductDeatils = ()=>{
    const {products,addTocart,ThemeChanger,apptheme} = useShop();
    

    const {id} = useParams();
    const navigate = useNavigate();

    const [Product,setProduct] = useState(null);
    const [mainImage,setMainImage] = useState();

   useEffect(() =>{
        const getProduct = async() =>{
            try{
                const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
                setProduct(data);
               
                setMainImage(data.thumbnail);
            }catch (e){
                console.log(e);
            }
        };
        getProduct()
      },[id])

      if(!Product) return <ProductsDetailsSkeleton />

    return Product && ( <div className={`${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-gray-800"} p-4 md:p-8`}>
        <button onClick={() => navigate(-1)} className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">Go Back</button>

        <h1 className="text-3xl font-bold mb-6 ">{Product.title}</h1>
        <div className="md:flex">
            <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
                <img className="w-full h-96 object-cover rounded-lg shadow-md" src={mainImage} alt={Product.title}/>

                <div className="flex mt-4 space-x-2 overflow-x-auto">
                    {Product.images.map((image ,idx) =>(
                        <img onClick={() => setMainImage(image)} className="w-24 object-cover h-24 rounded-lg shadow cursor-pointer" src={image} key={idx}></img>
                    ))}
                    
                </div>
            </div>
            <div className="md:w-1/2 pl-4">
                    <p className={`${apptheme === "dark" ? "text-white" :"text-gray-800"}`}>{Product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-pink-600 font-semibold text-2xl">
                            {Product.price.toFixed()}
                        </span>
                        <span className={`text-sm ${apptheme === "dark" ? "text-white" :"text-gray-800"}`}>
                            {Product.stock > 0 ? `${Product.stock} in stock` : "out of stock"}
                        </span>

                    </div>
                    <div className="mb-4">
                <span className="text-yellow-500">
            {"★".repeat(Math.round(Product.rating))}
          </span>
          <span className="text-gray-300">
          {"★".repeat(Math.round(5 - Product.rating))}
          </span>
        </div>

        <button
							className="bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-900 transition-colors duration-200"
							onClick={() => addTocart(Product)}>
							Add To Cart
						</button>

            </div>
            
        </div>
    </div>)
}

export default ProductDeatils;
