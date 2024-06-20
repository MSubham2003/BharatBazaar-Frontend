import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import BackToTop from '../customer/components/Footer/BackToTop'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import Checkout from '../customer/components/Checkout/Checkout'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRoutes = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:levelTwo/:levelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
                
                {/* <Order/> */}
                {/* <OrderDetails/> */}
            </Routes>
            <div>
                <BackToTop />
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoutes