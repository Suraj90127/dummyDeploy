const express = require("express");
const usercontrolar = require("../conrollar/users");
const router = express.Router();

router
  .post("", usercontrolar.createUser)
  .get("", usercontrolar.getUser)
  .get("/:id", usercontrolar.getUserByid)
  .put("/:id", usercontrolar.updateUser)
  .patch("/:id", usercontrolar.rplaceUser)
  .delete("/:id", usercontrolar.deleteUser);

exports.router = router;
