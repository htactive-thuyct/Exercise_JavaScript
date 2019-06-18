let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        reject(new Error("Tham số phải kiểu number"));
      }
      resolve(a + b);
    }, 1000);
  });
};

let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        reject(new Error("Tham số phải kiểu number nhé"));
      }
      resolve(a * b);
    }, 1000);
  });
};
let divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        reject(new Error("Tham số phải kiểu number nhé"));
      }
      if (b === 0) {
        reject(new Error("Chia cho 0 nè"));
      }
      resolve(a / b);
    }, 1000);
  });
};

// divide(1, 4).then(
//   result => console.log("kết quả là: " + result),
//   error => console.log(error + "")
// );

// multiply(1, 4).then(
//   result => console.log("kết quả là: " + result),
//   error => console.log(error + "")
// );
// add("1", 4).then(
//   result => console.log("kết quả là: " + result),
//   error => console.log(error + "")
// );

//sử dụng proise liên tiếp
let dientich = (a, b, h) => {
  add(a, b)
    .then(result => multiply(result, h))
    .then(res => divide(res, 2))
    .then(square => console.log("Diện tích: " + square))
    .catch(e => console.log(e + ""));
};
dientich(3, 4, 5);

// tái sử dụng function

let dientich1 = (a, b, h) => {
  return add(a, b)
    .then(result => multiply(result, h))
    .then(res => divide(res, 2));
};
dientich1(3, 4, 5)
  .then(square => console.log("Diện tích: " + square))
  .catch(e => console.log(e + ""));
