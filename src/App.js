import NavbarLogin from "./Components/Utility/NavbarLogin";
import Footer from "./Components/Utility/Footer";
import HomePage from "./Page/Home/HomePage";
import LoginPage from "./Page/Auth/LoginPage";
import Register from "./Page/Auth/Register";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";

import { BrowserRouter, Routes , Route } from "react-router-dom"
import CartPage from "./Page/Cart/CartPage";
import ChoosePayementPage from "./Page/Checkout/ChoosePayementPage";






function App() {
  return (
    <div className="App">

      <NavbarLogin/>
        <BrowserRouter>

            <Routes> 
                <Route index element={ <HomePage/>} />
                <Route path="/login" element={<LoginPage/>}  />
                <Route path="/register"  element={<Register/>} />
                <Route path="/allcategory" element={<AllCategoryPage/>} />
                <Route path="/allbrand" element={<AllBrandPage/>} />
                <Route path="/products" element= {<ShopProductsPage/>} />
                <Route  path="/products/:id" element= {<ProductDetailsPage/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="//order/paymethod" element={<ChoosePayementPage/>} />

            </Routes>

        </BrowserRouter>
      <Footer/>
       
      
    </div>  
  );
}

export default App;
