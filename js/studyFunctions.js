// functions
function myFirstFunction() {
  const a = 10;
  const b = 20;
  let c = a + b;
  // console.log("The inner side of the function is called.", c);
}

myFirstFunction();

// Function with arguments
function mySecondFunction(productPrice1, productPrice2) {
  const newPrice = productPrice1 - productPrice2;
  // console.log("The product price is", newPrice);
}

mySecondFunction(100, 150);

// Anonymous function

const myThirdFunction = (a, b) => {
  // console.log("This is a function without arguments");
};

myThirdFunction(12, 12);

let titlexyz = document.getElementById("title");
titlexyz.innerHTML = "Title is changed";
titlexyz.style.color = "red";


function clicWalaFunction(){
  a=10
  b=20
  c=a+b
  console.log(c)
  alert("Button is Clicked")
}

const clickButton = document.getElementById("button")

clickButton.addEventListener("dblclick",clicWalaFunction)