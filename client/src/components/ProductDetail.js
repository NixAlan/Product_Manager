import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = props;

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Title: {product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={"/"}>Return to Home</Link>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default ProductDetail;
