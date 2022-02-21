const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/product", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.findOneProduct);
  app.delete("/api/product/:id", ProductController.deleteOneGame);
  app.put("/api/product/:id", ProductController.updateProduct);
};
