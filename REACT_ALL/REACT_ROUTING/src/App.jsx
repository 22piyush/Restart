import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailContact from "./pages/DetailContact";

function App() {

  return (
    <div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Navigate to={'/'}/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact/:id" element={<DetailContact/>}/>
        </Routes>
        

    </div>
  );
}

export default App;
