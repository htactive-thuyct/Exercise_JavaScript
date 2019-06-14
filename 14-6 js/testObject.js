function Student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

// Them phuong thuc cho thuy
Student.prototype.getName = function() {
  return this.name;
};

// Khởi tọa Thuy theo kieu Student
var msthuy = new Student("Thuy", 22, "Quang Binh");

console.log(msthuy);

// get name of Thuy
console.log(msthuy.getName());

// add hello cho thuy
Student.prototype.sayHello = function() {
  console.log("thuy say hello everyone");
};

// Thuy say hello
msthuy.sayHello();

var list = [
  new Student("Thuy", 22, "Quang Binh"),
  new Student("Thuong", 12, "Quang Binh"),
  new Student("Nhung", 22, "Quang Tri")
];

console.log(list);

list.forEach(function(s) {
  console.log(s.getName());
});
