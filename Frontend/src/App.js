import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import BackToTop from './customer/components/Footer/BackToTop';
import Footer from './customer/components/Footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <BackToTop />
      <Footer/>
    </div>
  );
}

export default App;
