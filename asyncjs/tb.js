let aPromise = new Promise((resolve, reject) => {
  //resolve("Thanh cong");
  reject("Khong thanh cong");
});

aPromise.then(
  ss => console.log("da thuc thi " + ss),
  errSs => console.log(errSs + " ")
);

// tai su dung promise
let add4 = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Than so phai la kieu number"));
      }
      resolve(a + b);
    }, 3000);
  });
};

add4("4", 5).then(res => console.log(res), err => console.log(err + ""));

// promise lien tiep

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Than so phai la kieu number"));
      }
      resolve(a + b);
    }, 3000);
  });
};

let tb = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Than so phai la kieu number"));
      }
      resolve(a / b);
    }, 3000);
  });
};

add(4, 5)
  .then(res => tb(res, 2))
  .then(result => console.log(result))
  .catch(err => console.log(err + ""));
