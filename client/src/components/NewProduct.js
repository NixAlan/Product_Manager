import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const NewProduct = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const { products, setProducts } = props;

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // navigate("/");
        setProducts([...products, res.data]);
      })
      .catch((err) => {
        console.log(err);
        // need to add validations
      });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <h1>Product Manager</h1>
        <div className="rowNewProduct">
          <label>Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div className="rowNewProduct">
          <label>Price: $</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </div>
        <div className="rowNewProduct">
          <label>Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
