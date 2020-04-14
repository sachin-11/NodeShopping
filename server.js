const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    '<from action><input  type = "text" name="title"><button type= "submit">Add Product</button></from>'
  );
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello From express</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`);
});
