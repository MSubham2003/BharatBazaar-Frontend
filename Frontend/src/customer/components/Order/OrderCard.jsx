import { Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from 'react-router-dom';



const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl mt-4">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item sx={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70" alt="" />
                        <div className="ml-5">
                            <p className="space-y-2">Men Regular Mid Rise Black Jeans</p>
                            <p className="opacity-50 font-semibold text-xs">Size: M</p>
                            <p className="opacity-50 font-semibold text-xs">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <p>₹799</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="space-y-2 font-semibold">
                        {true && <div>
                            <FiberManualRecordIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Delivered On Mar 03</span>
                        </div>}


                        {false && <div>
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Expected Delivery On Mar 03</span>
                        </div>}

                        <p className="text-xs">Your Item Has Been Delivered</p>

                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard