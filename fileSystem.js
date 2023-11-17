// Read File
const fs = require("fs");

// const txt = fs.readFileSync("../demo.txt", "utf-8");
// console.log(txt);

fs.readFile("../demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});

// replace contant

// fs.writeFile("demo.txt", "This is my text", function (err) {
//   if (err) throw err;
//   console.log("Replaced!");
// });

// // add contant
// fs.appendFile("demo.txt", "This is my book", function (err) {
//   if (err) throw err;
//   console.log("Replaced!");
// });

// // file delete

// fs.unlink("demo.txt", function (err) {
//   if (err) throw err;
//   console.log("Delete");
// });

// file rename

// const fs = require("fs");

// fs.rename("main.txt", "demo.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });
