const express = require("express");
const controlar = require("../conrollar/products");
const router = express.Router();

router
  .post("", controlar.createProduct)
  .get("", controlar.getAllProduct)
  .get("/:id", controlar.getProductByid)
  .put("/:id", controlar.rplaceProduct)
  .patch("/:id", controlar.updateProduct)
  .delete("/:id", controlar.deleteProduct);

exports.router = router;
