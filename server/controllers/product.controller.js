const Product = require("../models/product.model");
const productRoutes = require("../routes/product.routes");

module.exports = {
  findAllProducts: (req, res) => {
    Product.find()
      .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
      })
      .catch((err) => {
        console.log("Did not find all games");
        res.json({ message: "Findall Failed", error: err });
      });
  },

  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
      })
      .catch((err) => {
        console.log("Product was not created");
        res.status(400).json(err);
      });
  },

  findOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        console.log(product);
        res.json(product);
      })

      .catch((err) => res.json(err));
  },

  deleteOneGame: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deleteGame) => {
        console.log(deleteGame);
        res.json(deleteGame);
      })
      .catch((err) => {
        console.log("Delete Product Failed");
        res.json({
          message: "something went wrong deleting a game",
          error: err,
        });
      });
  },

  updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateProduct) => {
        console.log(updateProduct);
        res.json(updateProduct);
      })
      .catch((err) => {
        console.log("somthing went wrong in updating product");
        res.status(400).json(err);
      });
  },
};
