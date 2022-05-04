import "./style.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./Component/Product";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
