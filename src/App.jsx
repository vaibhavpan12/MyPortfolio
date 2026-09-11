import { useState } from "react";
// import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Certificates from "./pages/Certificates";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Orders from "./pages/Orders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/orders" element={<Orders />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
