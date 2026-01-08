import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          MyStore
        </Link>

        <div className="ms-auto d-flex align-items-center gap-4">
          <Link to={"/"} className="nav-link text-white" >
            Home
          </Link>
          <Link to={"/cart"}><FaShoppingCart color="white" size={20} /></Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<CartPage/>}/>
        </Routes>
      <Home />
    </BrowserRouter>
  );
}

export default App;
