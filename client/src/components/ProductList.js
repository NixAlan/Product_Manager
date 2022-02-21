import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {
  const { products, setProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/product/${idFromBelow}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts(
          products.filter((product, index) => product._id !== idFromBelow)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product, index) => {
        return (
          <div className="rowProducts" key={index}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
            <button onClick={() => deleteProduct(product._id)}>
              Delete Product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
