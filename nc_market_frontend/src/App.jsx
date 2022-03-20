import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import "./App.css";
import Cart from "./components/views/pages/customer/Cart";
import Home from "./components/views/pages/home/Home";
import Products from "./components/views/pages/products/Products";
import CreateVenderOwner from "./components/views/pages/vendor/createVendor/CreateVendor";
import VendorCreateProduct from "./components/views/pages/vendor/vendorCreateProduct/VendorCreateProduct";
import VendorProduct from "./components/views/pages/vendor/vendorProduct/VendorProduct";
import VendorProductList from "./components/views/pages/vendor/vendorProductList/VendorProductList";
import Venders from "./components/views/pages/vendor/vendors/Venders";
import VendorShop from "./components/views/pages/vendor/vendorShop/VendorShop";
import Footer from "./components/views/ui/footer/Footer";
import Header from "./components/views/ui/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* home */}
        <Route path={'/'} exact>
            <Home/>
          </Route>
          {/* vendor */}
          <Route path={'/vendors'} exact>
            <Venders/>
          </Route>
          <Route path={'/createvendorowner'} exact>
            <CreateVenderOwner/>
          </Route>
          <Route path={'/vendorshop'} exact>
            <VendorShop/>
          </Route>
          <Route path={'/vendorproduct'} exact>
            <VendorProduct/>
          </Route>
          <Route path={'/vendorproductlist'} exact>
            <VendorProductList/>
          </Route>
          <Route path={'/vendorcreateproduct'} exact>
            <VendorCreateProduct/>
          </Route>
   
          {/* customer */}
          <Route path={'/cart'} exact>
             <Cart/>
          </Route>
       <Route path={'/products'} exact>
            <Products/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
