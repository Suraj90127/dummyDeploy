const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: { type: Number, min: [0, "plese price positive"] },
  discountPercentage: Number,
  rating: {
    type: Number,
    min: [0, "wrongn min rating"],
    max: [5, "wrong max raring"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
