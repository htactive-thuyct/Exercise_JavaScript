// read file

let fs = require("fs");
let read = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

read("./asyncjs/thuy.txt").then(
  data => console.log(data),
  err => console.log(err + " ")
);

let addPR = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Than so phai la kieu number"));
      }
      resolve(a + b);
    }, 3000);
  });
};

let ab2 = async () => {
  let res = await addPR(4, 5);
  console.log(res);
  console.log("res");
};

ab2();
