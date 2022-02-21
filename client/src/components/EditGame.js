import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const EditGame = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const { id } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const editHandle = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        // need to add validations
      });
  };

  return (
    <div>
      <form onSubmit={editHandle}>
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
          <label>Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>

        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditGame;
