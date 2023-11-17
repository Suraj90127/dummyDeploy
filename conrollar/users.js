const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const users = data.users;
// Body parser

exports.createUser = (req, res) => {
  users.push(req.body);
  console.log(req.body);
  res.json({ type: "POST" });
};

exports.getUser = (req, res) => {
  res.json(users);
};
exports.getUserByid = (req, res) => {
  const id = +req.params.id;
  const pro = users.find((p) => p.id === id);
  res.json(pro);
};
exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  console.log(userIndex);
  res.json({ index: userIndex });
};
exports.rplaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  console.log(userIndex);
  res.json({ index: userIndex });
};
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.json({ Dlete: "Delete successfuly" });
};
