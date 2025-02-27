console.log("String Methods");

// with single quotes

let str1 = "Ameer Hamza";
const str2 = "Ahmed ALi";
var str3 = `Ameer Hamza`;

console.log(`My name is ${str3} AND the length is:${str3.length}`);

// concat
let concatedString = str1.concat(" ", str2);

console.log(concatedString);

// Char At

const studentName = "Ali Ahmed";

console.log(studentName.charAt(4));

// upper case
console.log(studentName.toUpperCase());

// lower case
console.log(studentName.toLowerCase());

//includes
console.log(studentName.includes("a"));

//slice
let slicedName =studentName.slice(3)
console.log(slicedName);
