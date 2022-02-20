import React, { useState } from "react";
import NewProduct from "../components/NewProduct";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <NewProduct products={products} setProducts={setProducts} />
      <hr />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;
