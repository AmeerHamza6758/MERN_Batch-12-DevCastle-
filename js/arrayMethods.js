console.log("first");

let studentsName = ["Hunzla", "Ahmed", "umer", "Baksh"];

studentsName.push("Faheem", "Hamza");

console.log(studentsName, "This is Array");

// pop
// studentsName.pop()

// unshift

studentsName.unshift(23);

// shift
studentsName.shift();

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let newArray = array1.concat(array2);
console.log(newArray);
console.log(array1,'Old array')


//length

console.log(newArray.length, "This is length");

//splice


let spliceArray = array1.splice(3)
console.log(array1,'Array');
console.log(spliceArray,'Splice');

