import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = props;

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
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to={"/"}>Return to Home</Link>
    </div>
  );
};

export default ProductDetail;
