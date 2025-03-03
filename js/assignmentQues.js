console.log("Assignment");

//Question Reverse of an array.
let numArray = [10, 20, 30, 13, 5, 17, 44, 667, 233, 77];

let reversedArray = [];

for (let i = numArray.length - 1; i >= 0; i--) {
  reversedArray.push(numArray[i]);
}
console.log(reversedArray, "Custom Logic");

let reveArray = numArray.reverse();
console.log(reveArray);

// Question find min max
let minAndmaxArray = [10, 20, 30, 13, 5, 17, 44, 667, 233, 77];
let min = minAndmaxArray[0];
let max = minAndmaxArray[0];

for (let i = 1; i < minAndmaxArray.length; i++) {
  if (minAndmaxArray[i] > max) {
    max = minAndmaxArray[i];
  } else if (min > minAndmaxArray[i]) {
    min = minAndmaxArray[i];
  } else {
    console.log("Not a valid min and max");
  }
}
console.log(max, min);

// Question find name.
let nameArray = ["Ali", "Hamza ", "Shahid", "umer"];

let findedNum = nameArray.find((name) => name == "Ali");

console.log(findedNum);

// includes

//sort questions
let sortArray = [10, 20, 30, 13, 5, 17, 44, 667, 233, 77];
// let sortedArray = sortArray.sort((x, y) => x - y);
// console.log(sortArray);

// Object methods

let student = {
  name: "Ali",
  age: 20,
  marks: 80,
};
delete student.age;
// Add email to existing object
// student.email ="student@example.com";
student["email"] = "student@example.com";

// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

// console.log(student);

// console.log("Single Values", student.email);

// try catch
function xyz() {
  try {
    let abc = 20
  } catch (error) {
    console.log(error.message,'This is Erro');
  }
}

// console.log(xyz());
xyz()
