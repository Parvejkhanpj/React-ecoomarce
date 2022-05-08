import "./style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./Component/Product";
import Login from "./Component/Login";
import Cart from "./Component/Cart";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
