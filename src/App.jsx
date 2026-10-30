import { useState } from "react";
// import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import Certificates from "./pages/Certificates";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CreativeNav from "../components/Header";
// import Orders from "./pages/Orders";
function SharedNavigation() {
  const { pathname } = useLocation();
  const pageHasItsOwnNavigation = ["/about", "/projects"].includes(pathname.toLowerCase());
  return pageHasItsOwnNavigation ? null : <CreativeNav />;
}

function App() {
  return (
    <BrowserRouter>
      <SharedNavigation />
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
