import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const handelCheckout = () => {
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1,1,1,1,1].map((item)=><CartItem />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase opacity-60 font-semibold pb-4">
              Price details
            </p> <hr />
            <div className='space-y-3 font-medium opacity-85 mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price (3 Items)</span>
                <span>₹7497</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className=' text-green-600'>-₹3897</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charge</span>
                <span className=' text-green-600'>FREE</span>
              </div>
              <div className='flex justify-between pt-3 text-black font-bold text-lg'>
                <span>Total amount</span>
                <span className=' text-base text-green-600'>₹3420</span>
              </div>
            </div>

            <Button onClick={handelCheckout} variant="contained" className="w-full" sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "#673ab7" }}>Check out</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart