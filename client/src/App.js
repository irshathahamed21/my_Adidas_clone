
import Home from './pages/Home/Home';
import Announcement from './components/Announcement/Announcement';
import TopLeftBar from './components/Navbar/TopLeftBar';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products/Products';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './pages/cart/Cart';

import './App.css';
import Checkout from './pages/checkout/Checkout';
import Mens from './pages/Products/Mens';
import Womens from './pages/Products/womens';
import Kids from './pages/Products/Kids';

function App() {
  return (
    <>
        <Announcement />
        <TopLeftBar />
        <Navbar />
        <Routes >
        <Route  path = "/product/:productId" element = { <ProductDetails/>} >
        </Route>
        <Route  path = "/mens"  element = { <Mens/>}>
        </Route>
        <Route  path = "/womens"  element = { <Womens/>}>
        </Route>
        <Route  path = "/kids"  element = { <Kids/>}>
        </Route>

        <Route  path = "/cart"  element = { <Cart/>}>
        </Route>
        <Route  path = "/delivery"  element = { <Checkout/>}>
        </Route>


        <Route exact path = "/" element = { <Home/>}>
        </Route> 
        <Route>404 not found</Route>
        </Routes>
        {/* <Footer /> */}
    </>
  );
}

export default App;
