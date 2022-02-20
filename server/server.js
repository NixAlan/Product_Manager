const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

require("./config/mongoose.config");
require("./routes/product.routes")(app);

app.listen(8000, () => console.log(`connected to port ${port}`));
