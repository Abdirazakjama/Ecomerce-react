import React, { useContext } from 'react'
import {GoTrash} from 'react-icons/go'
import { Payment } from './Payment';
import useShop, { shopContext } from '../shopContext';

const CartItems = () => {
  const {products,updateProductQuantety,removeFromCart,ThemeChanger,apptheme} = useShop();

  return (
    <div className={`flex flex-col ${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-gray-800"} lg:flex-row p-4 lg:p-8 space-y-6 lg-space-y-0 lg-space-x-6`}>
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">{products.length > 0 ? "your cart items" :"your cart is empty right now please go ahed and add some items"}</h2>
            {products.map((product) =>  (
                <div key={product.id} className="flex items-center space-x-4 mb-6">
                    <img  className='w-24 h-24 object-cover rounded-lg' src={product.thumbnail}  alt={product.title} />

                    {/* {productinfo} */}
                    <div className="flex flex-col justify-between flex-1">
                        <h3 className="text-lg font-samibold">{product.title}</h3>
                        <div className="text-sm text-gray-500">{product.description}</div>
                        {/* {price and quantity} */}
                        <div className="flex items-center justify-between mt-2">
                            <div className='flex items-center space-x-2 '>
                                {/* {price} */}
                                <span className='text-lg text-pink-600 font-semibold'>${product.price.toFixed()}</span>
                                {/* {Quantity} */}
                                <div className='flex items-center space-x-2'>
                                    <label htmlFor="" className="text-sm font-semibold">Quantity</label>
                                    <input
											onChange={(event) =>
												updateProductQuantety(product, event.target.value)
											}
											value={product.quentity}
											min={1}
											type="number"
											className="w-16 border  border-gray-200 rounded-md p-2 text-center"
										/>
                                </div>
                            </div>
                            {/* {Deleting} */}
                    <button onClick={()=> removeFromCart(product)} className='text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out'>
                        <GoTrash  className='w-4 h-4'/>
                    </button>
                        </div>
                    
                    </div>
                </div>
            ) )}
        </div>
        {/* {payments} */}
        <Payment />
    </div>
  )
}
export default CartItems;