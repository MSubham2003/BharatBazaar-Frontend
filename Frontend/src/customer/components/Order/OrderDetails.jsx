import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="shadow-xl rounded-md p-5 border">
        <h1 className="font-bold text-lg py-3">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-10 my-5 shadow-xl rounded-md p-5 border">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1, 1, 1].map((item) => <Grid item container className="shadow-xl rounded-md p-5 border " sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/a/w/t/30-ud0030-united-denim-original-imagf9n9efexz68u-bb.jpeg?q=70" alt="" />

              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 text-xs font-semibold opacity-70">
                  <span>Color: black</span>
                  <span>Size:M</span>
                </p>
                <p>Seller: UNITED DENIM</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-1.5 text-5xl" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
        )}

      </Grid>
    </div>
  )
}

export default OrderDetails