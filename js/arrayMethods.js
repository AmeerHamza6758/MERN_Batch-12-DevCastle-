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
let newArray1 = array1.concat(array2);
// console.log(newArray);
console.log(newArray1,'Old array')

//length

// console.log(newArray.length, "This is length");

//splice

let spliceArray = array1.splice(3,4);
// console.log(array1,'Array');
// console.log(spliceArray,'Splice');

// filter
const numArray = [20, 11, 44, 222, 45,44, 212, 88];

let newArray = numArray.filter((i) => i % 2 == 0);

console.log(newArray, "Filtered Array");


//map
let mapArray = newArray.map((num) => num * 3);

console.log(mapArray, "Map Array");



//for-Each
let forEachArray = numArray.forEach((num) => {
  console.log(num * 2);
});

console.log(forEachArray, "forEach Array");


//find
let findArray = numArray.find((num) => num == 44);

console.log(findArray, "Find Array");


  //sort  
  let sortArray=[1,5,2,8,5,3,4,9,7,10,33,67,900]

  let sortedArray =sortArray.sort((a,b)=> a-b)

console.log(sortedArray, "Sorted Array")

//reverse
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let reversedArray = array.reverse()
console.log(reversedArray, "Reversed Array")

//join  array

let joinArray = array.join(' ')
console.log(joinArray, "Join Array")

//indexOf array
const xyz=['Hamza', "Ali", "Fahad","Hanzla","Fahad"]
let indexOfArray = xyz.indexOf("Fahad")
console.log(indexOfArray, "Index Of Array")