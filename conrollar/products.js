// const express = require("express");
const fs = require("fs");
const express = require("express");
const app = express();

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// const products = data.products;

const model = require("../model/product");
const Product = model.Product;
// Body parser
// app.use(express.json());

exports.createProduct = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);
  // product.title = "oppoX";
  // product.price = 999900000000000;
  // product.rating = 9.4;
  product
    .save()
    .then((doc) => {
      console.log(doc);
      res.status(201).json(doc);
      // res.status(201).json(req.body);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  // const products = await Product.find({ price: { $gt: 600 } });
  res.json(products);
};
exports.getProductByid = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id);

  res.json(products);
};
exports.rplaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Product.findOneAndReplace({ _id: id }, req.body);
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(201).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Product.findOneAndUpdate({ _id: id }, req.body);
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(201).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(201).json(err);
  }
};

exports.app = app;
