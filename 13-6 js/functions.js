var arr = ["a", "b", "c"];

// console.log(arr);
// console.log(arr.slice(3));

["a", "b", "c"].forEach(function(elem, index) {
  // (1)
  // console.log(index + ". " + elem);
});
[1, 2, 3].map(function(x) {
  return x * x;
});

// console.log(Math.abs(-5555552)); // chuyen qua so dương

// console.log(Math.pow(5, 2)); //căn bac 2

// console.log(Math.round(8.6)); // làm tròn

const internship = {
  name: "Thuy",
  school: "PNV",
  company: "HT Active"
};

// let { name, school, company } = internship;

// console.log(internship.name, internship.school, internship.company);

// control flow if else for switch
//  let const

// data type
Number;
String;
Array;
Object;

// represent entity
const students = [
  { name: "sdfsdf", age: 20, grade: 4, gender: true },
  { name: "Thuy", age: 20, grade: 2, gender: false },
  { name: "sdfdsf", age: 20, grade: 7, gender: false },
  { name: "Huong", age: 30, grade: 9, gender: false }
];

// query
// filter, map, reduce, foreach

const studentPoint = students
  .filter(student => student.grade >= 5)
  .map(student => student.grade);

let sum = studentPoint.reduce((sum, current) => sum + current, 0);

let averageGrade = sum / studentPoint.length;
console.log(averageGrade);
