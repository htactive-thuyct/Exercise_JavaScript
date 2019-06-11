console.log("Hello World");

//alert("hello Thuy");
console.log("Hello Thuy");

let sum = 3 + 2;
console.log(sum);

const sinhvien = [
  {
    id: 1,
    name: "Thuy",
    age: 20,
    class: "PNV20A"
  },
  {
    id: 2,
    name: "Thuong",
    age: 21,
    class: "PNV20B"
  },
  {
    id: 3,
    name: "Nhung",
    age: 20,
    class: "PNV20B"
  }
];

//Kiem tra 1 so co phai la so duong hay khong
let ktrSoDuong = function() {
  let arr = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10, 19];

  for (let i in arr) {
    if (arr[i] < 0) {
      console.log(arr[i] + "  Khong phai so nguyen duong");
    } else console.log(arr[i] + "  la so nguyen duong");
  }
};

//Kiem tra 1 so co phai la chinh phuong
let ktrSoChinhPhuong = function() {
  let arr = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10, 19];

  for (let i = 0; i < arr.length; i++) {
    if (i * i == arr[i]) {
      console.log(arr[i] + "   la so chinh phuong");
    } else console.log(arr[i] + "  Khong phai la so chinh phuong");
  }
};

let search = function() {
  var found = sinhvien.find(function(element) {
    return (element = "Thuy");
  });
  console.log(found);
};
console.log("------------");
search();
console.log("------------");
ktrSoDuong();
console.log("------------");
ktrSoChinhPhuong();
