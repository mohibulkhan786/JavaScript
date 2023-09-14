//Write a function statement in javascript?

function myFunName(parameters) {
  //code to be executed
}

function abc() {
  // logic
}


// Write a function Declaration?
//it is similar to function statement

//write a anonymous function with multiple scenarios?
var abc = function () { }
const x = function (a, b) { return a + b };

map(function () {

})
// setTimeout(()=>{}, 400)
// function( functions() { return}){

// }



// Write a named function expression?

const myFuncExp = function myFunc() {
  console.log("name function expressions")
}
myFuncExp()

// write all type of first class function?

//write all type of first citizen function?
//  [1] A function assign to a variable is called first class / first citizen function

const myFunction = function () {

  // code to be executed

}

// [2] A function which takes another function as arguments is called first class / first citizen function.

function myFunction(a) {

}
const aa = () => {
  return 5 + 6
}
myFunction(a)

// [3] A function which returns another function is called first class / first citizen function

function myFunction() {
  return function () {
    return 5
  }
}




// write an arrow function for single statement?
const ax = (a, b) => a + b

//write an arrow function for multiple statement?
const ay = (a, b) => {
  const c = a + b
  return c
}
// write a program of pure function?
let a = 6


function myPureFunc(c) {
  a = 7
}

myPureFunc(5)

// write a program using higher order function for calculating below circle formulas?

// Circumference (C): The distance around the circle.
Formula: C = 2 * π * r

// Area (A): The region enclosed by the circle.
Formula: A = π * r ^ 2

// Diameter (d): The distance across the circle passing through the center.
Formula: d = 2 * r

// Radius (r): The distance from the center to any point on the circle.
Formula: r = d / 2


//Recognize function name of all below functions and also write the output of the program

const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(3, 4));

const factorial = function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
console.log(factorial(5));

function add(a, b) {
  return a + b;
}
const operation = add;
console.log(operation(2, 3));

const square = x => x * x;
console.log(square(4));

function double(arr) {
  return arr.map(num => num * 2);
}
const numbers = [1, 2, 3, 4];
const doubledNumbers = double(numbers);
console.log(doubledNumbers);

function operate(a, b, operation) {
  return operation(a, b);
}
const result = operate(5, 3, (x, y) => x * y);
console.log(result);

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob"));

