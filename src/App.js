import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Galery from "./pages/galery";
import Products from './pages/products';
import Contact from "./pages/contact";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/galery"} element={<Galery />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
