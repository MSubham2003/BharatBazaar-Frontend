import { Grid } from '@mui/material';
import React from 'react';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" }
];

const Order = () => {
    return (
        <div className="lg:px-20 px-5">
            <Grid container spacing={2}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-2xl bg-white p-8 m-4 sticky top-5">
                        <h1 className="font-bold text-lg">Filter</h1>
                        <div className="space-y-4 my-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderStatus.map((option) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9.5}>
                    <div className="space-y-5 mb-5">
                        {[1,1,1,1].map((item) => (<OrderCard /> ))}
                    </div>

                </Grid>
            </Grid>
        </div>
    );
};

export default Order;
