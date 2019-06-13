// functional programming // declarative programming what
// procedure programming // OOP // imprerative programming how

// instruction
// sub routine
;
const students = [
  { name: "Thuong", age: 20, grade: 4, gender: true },
  { name: "Thuy", age: 20, grade: 2, gender: false },
  { name: "Ly", age: 20, grade: 7, gender: true },
  { name: "Huong", age: 30, grade: 9, gender: false }
];
// Use procedure programming // OOP // imprerative programming how
// students.map()...

function myMap(arr, cb) {
  let returnResults = [];
  for (let i = 0; i < arr.length; i++) {
    returnResults.push(cb(arr[i]));
  }
  return returnResults;
}

Array.prototype.myMap = function(cb) {
  let returnResults = [];
  for (let i = 0; i < this.length; i++) {
    returnResults.push(cb(this[i]));
  }
  return returnResults;
};
let f = students.myMap(item => item.grade);
console.log(f);

////Students.myFilter()...s

// function myFilter(arr, cb) {
//   let returnResults = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].grade >= 5) {
//       returnResults.push(cb(arr[i]));
//     }
//   }
//   return returnResults;
// }

// let h = myFilter(students, item => item.name);
// console.log(h);

Array.prototype.myFilter = function(cb) {
  let returnResults = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      returnResults.push(this[i]);
    }
  }
  return returnResults;
};

let t = students.myFilter(item => {
  return item.grade > 5;
});
console.log(t);

// Myreduce()...

function Myreduce(arr, cb) {
  let sum = 0,
  for (let i = 0; i < arr.length; i++) {
      sum = sum + cb(arr[i])
  }
  return sum;
}

myReduce(myMap(myFilter(coll, cb), item => item.grade))) // nested

// chaining -> flatten

// .filter()
// .map()
// .map()
// .reduce()

// let e = Myreduce(students);
// console.log(e);

// // use functional programming // declarative programming what
let m = students
  .filter(s => s.grade >= 5)
  .map(s => s.age)
  .reduce((sum, current) => sum + current, 0);
console.log("ket qua la: ", m);

// client side 
// data types
// data processing: 
// OOP
