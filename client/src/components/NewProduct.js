import React, { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDiscription] = useState("");

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
        // need to add navigate to main
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
        <div>
          <label>Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Discription:</label>
          <input
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
            type="text"
          />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
