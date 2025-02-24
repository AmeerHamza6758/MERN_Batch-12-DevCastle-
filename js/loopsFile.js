console.log("Loops in JavaScript");

// For Loop

// const myName = "Ameer Hamza";
// let startNum = 11;
// const endNum = 10;

// for (startNum; startNum <= endNum; startNum++) {
//   console.log(myName, "=>", startNum);
// }

// Do-while loop

let doNum = 0;

// do {
//   console.log("Do-while loop print first time", doNum);
//   doNum++;
// } while (doNum <= 5);

// While loop

let whileNum = 0;
// while (whileNum <= 10) {
//   console.log("While loop print first time", doNum);
//   whileNum++;
// }

// Print table using for loop

// const number = 18;
// let startnum = 1;
// for (startnum; startnum <= 10; startnum++) {
//   let totalMul = number * startnum;
//   console.log(`${number}*${startnum}=${totalMul}`);
// }

// For in loop

const employee = {
  name: "Ameer hamza",
  email: "ameer@gmail.com",
  age: 30,
  phone: "30493865",
  salary: "10000",
  address: "123 street, Ryk",
};

for (let key in employee) {
  console.log(`${key} == ${employee[key]}`);
}

// For of loop
const schoolSalary = [1000, 2000, 4000, 7000, 3000, 1400];

for (let key of schoolSalary) {
  // console.log(key * 2);
}
