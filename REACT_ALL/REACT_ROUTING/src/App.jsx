import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailContact from "./pages/DetailContact";
import A1 from "./components/A1";
import A2 from "./components/A2";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="a1" element={<A1 />} />
          <Route path="a2" element={<A2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<DetailContact />} />
      </Routes>
    </div>
  );
}

export default App;
