import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="p-5 border rounded-md shadow-xl mb-7">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70" alt="" />
        </div>
        <div className="ml-5 space-y-1">

          <p className="font-semibold">Men Regular Mid Rise Blue Jeans</p>
          <p className="opacity-70">Size: L, Color: Blue</p>
          <p className="opacity-70 mt-2">Seller: Roadster</p>

          <div className="flex space-x-2 items-center mt-6">
            <p className="font-semibold">
              ₹1299
            </p>
            <p className="font-semibold opacity-50 line-through">
              ₹2499
            </p>
            <p className="font-semibold text-green-600">
              50% off
            </p>
          </div>

        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)" }}><RemoveCircleOutlineIcon /></IconButton>
          <span className="px-3 border rounded-sm">
            3
          </span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}><AddCircleOutlineIcon /></IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)", bgcolor: "#673ab7", '&:hover': { bgcolor: "#5f33a6" } ,color:'white'}}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
