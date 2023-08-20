import React from 'react'
import useShop from '../shopContext';

export const Payment = () => {
    const {total} = useShop();
  return (
    <div className='lg:w-1/3'>
        <div className='border p-4 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Choose Payment Method</h2>
            <div className='space-y-4'>
                <label htmlFor="" className='flex items-center space-x-2'>
                    <input type="radio" name='payment' className='text-pink-600' />
                    <span>card Payment</span>
                </label>
                <label htmlFor="" className='flex items-center space-x-2'>
                    <input type="radio" name='payment' className='text-pink-600' />
                    <span>Cash on Delivary</span>
                </label>
            </div>

            <div className='mb-6 border-t pt-6'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-lg font-semibold text-gray-600'>SubTotal</span>
                    <span className='text-lg font-semibold text-gray-600'>{total}</span>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-2xl font-semibold text-pink-600'>SubTotal</span>
                    <span className='text-2xl font-semibold text-pink-600'>{total}</span>
                </div>

                <div className='mt-6'>
                    <button className='w-full bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-700'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
