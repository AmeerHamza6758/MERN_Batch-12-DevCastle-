console.log("Conditional Statements");

// if statement
const salary = 3000;

if (salary < 5000 && salary > 4000) {
  const newSalary = salary + 1000;
  console.log("Your new salary is " + newSalary);
} else if (salary < 4000 && salary > 2000) {
  const newSalary = salary + 2000;
  console.log("Your new salary is abc " + newSalary);
} else if (salary < 2000) {
  const newSalary = salary + 3000;
  console.log("Your new salary is " + newSalary);
} else {
  console.log("You already have a good salary");
}

//WAP check the number is even or odd. if even then print and number
// is even and if odd divide it by 2 and add it again orevious value then print it

let num = 21;

if (num % 2 === 0) {
  console.log("Number is even", num);
} else if (num % 2 !== 0) {
  let newNum = num / 2 + num;
  console.log("The number is odd", newNum);
} else {
  console.log("Invalid input. Please enter a number");
}

// If else
{
  num > 19
    ? console.log("Number is greater than 20")
    : console.log("Number is less than 20");
}

const num1 = 10;
const num2 = 20;
const operator = prompt("Enter Operator");
// Switch Statements
switch (operator) {
  case "+":
    const totalsum = num1 + num2;
    console.log(totalsum, "Case-1");
    break;
  case "-":
    const totalsub = num1 - num2;
    console.log(totalsub, "Case-2");
    break;
  case "/":
    const totalDiv = num1 / num2;
    console.log(totalDiv, "Case-3");
    break;
  case "*":
    const totalMul = num1 * num2;
    console.log(totalMul, "Case-4");
    break;
  default:
    console.log("Invalid Operator");
}
