console.log("Number Methods");

const a = 20;
const b = "30";
const priceOfBasket = a + Number(b);

let = abc = "30000";
console.log(abc, typeof +abc);
console.log(priceOfBasket);
console.log(typeof priceOfBasket);

// Parse Int
let parseNum = "22.677";

console.log(parseInt(parseNum));

console.log(parseFloat(parseNum));

//Round
let roundNum = 24.2;

console.log(Math.round(roundNum), "Round Method");

//Floor
console.log(Math.floor(roundNum), "Floor Method");

//ceil
console.log(Math.ceil(roundNum), "Ceil Method");

//trunc
console.log(Math.trunc(roundNum), "Trunc Method");

//Max
// let numArray =

console.log(Math.max(10, 31, 30, 20, 50));
//min
console.log(Math.min(10, 31, 30, 20, 50));





let numArray = [21, 10, 30, 60, 101, 20, 5, 20];
let max = numArray[0];
let min = numArray[0];
// let max =0
// let min=0

for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
  }
  if (numArray[i] < min) {
    min = numArray[i];
    // console.log("We got the minimum value", min);
  }
}
console.log("We got the maximum value", max);
console.log("We got the minimum value", min);
