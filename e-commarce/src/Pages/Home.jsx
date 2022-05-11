import React from "react";
import Categories from "../Component/Categories";
import Newsletter from "../Component/Newsletter";
import Products from "../Component/Products/Products";
import Slide from "../Component/Slide";

function Home() {
  return (
    <div>
      <Slide />
      <Categories />
      <Newsletter />
      <Products />
    </div>
  );
}

export default Home;
