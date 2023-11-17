// (1) Rest Api.............................................................
const express = require("express");
const morgan = require("morgan");
// const app = express();
require("dotenv").config();
const productRoute = require("./routers/product");
const userRoute = require("./routers/user");
const apps = require("./conrollar/products");
const path = require("path");
const cors = require("cors");
const app = apps.app;

//mongoose connection
const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useUnifuendTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
// }

// const PORT = 8000;

// Body parser
app.use(cors());
app.use(express.json());
app.use(morgan("default"));
app.use(express.static(process.env.PUBLIC_DIR));
app.use("/products", productRoute.router);
app.use("/user", userRoute.router);
// app.use("*", (req, res) => {
//   res.sendFile(__dirname + "/dist/index.html");
// });
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server working on port ${process.env.PORT}`);
});
