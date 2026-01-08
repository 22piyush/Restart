import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider , useCart } from "./context/CartContext";

function Navbar() {

  const { cart } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          MyStore
        </div>

        <div className="ms-auto d-flex align-items-center gap-4">
          <Link to={"/"} className="nav-link text-white" >
            Home
          </Link>
          <Link to={"/cart"}><FaShoppingCart color="white" size={20}/><span className="ms-2">{cart?.length ?? 0}</span></Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
