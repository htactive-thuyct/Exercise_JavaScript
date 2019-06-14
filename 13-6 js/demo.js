const fs = require("fs");
console.log("234234324");

let arr = [1, 2, 3, 4, 5];

let files = fs.readdirSync(".");

for (let item of files) {
  console.log(item);
}
