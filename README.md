## JavaScript is the world's most popular programming language.

## JavaScript is the programming language of the Web.

## JavaScript accepts both double and single quotes.

## JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.


## Where To
==>In HTML, JavaScript code is inserted between <script> and </script> tags.
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

## Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

==>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

==>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
 

 ## Javascript Outputs
 ==>
 JavaScript can "display" data in different ways:
 
* Writing into an HTML element, using innerHTML.
1) Writing into the HTML output using document.write().
==>
document.write(5 + 6);

2) Writing into an alert box, using window.alert().
window.alert(5 + 6);

3) Writing into the browser console, using console.log().
==>
console.log(5 + 6);

4)
==>
<button onclick="window.print()">Print this page</button>


## JavaScript Statements
* A computer program is a list of "instructions" to be "executed" by a computer.

## In a programming language, these programming instructions are called statements.

## A JavaScript program is a list of programming statements.

## JavaScript statements are composed of:
==>
Values, Operators, Expressions, Keywords, and Comments.

## The statements are executed, one by one, in the same order as they are written.
==>
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

## When separated by semicolons, multiple statements on one line are allowed:
==>
a = 5; b = 6; c = a + b;

## JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
==>

## var
Declares a variable

## let
Declares a block variable

## const	
Declares a block constant

## if
Marks a block of statements to be executed on a condition

## switch
Marks a block of statements to be executed in different cases

## for
Marks a block of statements to be executed in a loop

## function
Declares a function

## return
Exits a function

## try	
Implements error handling to a block of statements


## JavaScript Variables
# What is variable
=> It's space in a memory. 
# Type of variable
    1. var (use before 2015)
    2. let (es6)
    3. const (es6)

    1. global scope => var
        => var works globally, it can intialize anywhere and use anywhere
    2. block scope => let const
        => let & const works only block scope which is inside {} scope
        => let can reassign value  inside of block but const can not reassign value
        => when we use object & array we can change and reassign in const object & array value

==>variables are used to store data values.
==>Variables are Containers for Storing Data

=>Before ES6 (2015), JavaScript had Global Scope and Function Scope.

=>ES6 introduced two important new JavaScript keywords: let and const.

## These two keywords provide Block Scope in JavaScript.

=>Variables declared inside a { } block cannot be accessed from outside the block:

==>JavaScript uses the keywords var, let and const to declare variables.

==>An equal sign is used to assign values to variables.

==>The var keyword was used in all JavaScript code from 1995 to 2015.

=>The let and const keywords were added to JavaScript in 2015.

## The let keyword was introduced in ES6 (2015)

=>Variables defined with let cannot be Redeclared

=>Variables defined with let must be Declared before use

=>Variables defined with let have Block Scope

==>
let x = 5;
let y = 6;
let z = x + y;
console.log(z);


## The const keyword was introduced in ES6 (2015)
=>Variables defined with const cannot be Redeclared
=>Variables defined with const cannot be Reassigned
=>Variables defined with const have Block Scope
==>
const x = 5;
const y = 6;
const z = x + y; //11
console.log(z);


## What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

## What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.


const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}


const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

## Operator
There are different types of JavaScript operators:

1. Arithmetic Operators +, -, *, /, %, ++, --
Arithmetic operators perform arithmetic on numbers (literals or variables).

2. Assignment Operators  =, +=, -=, *=, /=, %=
3. Comparison Operators  ==, !=, ===, !==, >, <, >=, <=
4. String Operators
5. Logical Operators     &&, ||, !
6. Bitwise Operators      &, |, ^, ~, <<, >>, >>>
7. Ternary Operators      ??
8. Type Operators      typeof(Returns the type of a variable)
                       instanceof	(Returns true if an object is an instance of an object type)


# Data Types (Primitive)

    ==>Primitive
        1. String
        2. Number
        3. Bigint
        4. Boolean
        5. Undefined
        6. Null
        7. Symbol(Assignment)
    
    =>Non-Primitive / Object
        1. An object
        2. An array
        3. A date

    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let x = true;
    let y = false;

    // Object:
    const person = {firstName:"John", lastName:"Doe"};

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");
 

 ## Conditional statements 
 1)  Conditional statements are used to perform different actions based on different conditions.
 2) when you write code, you want to perform different actions for different decisions.You can use conditional statements

## Use if to specify a block of code to be executed, if a specified condition is true

if (condition) {
  //  block of code to be executed if the condition is true
}

## Use else to specify a block of code to be executed, if the same condition is false

if (condition) {

  //  block of code to be executed if the condition is true

} else {

  //  block of code to be executed if the condition is false
}


## Use else if to specify a new condition to test, if the first condition is false

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


## Use switch to specify many alternative blocks of code to be executed

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

## JavaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.
## JavaScript supports different kinds of loops:

1) for - loops through a block of code a number of times

=>The for statement creates a loop with 3 optional expressions:

Syntax

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

 const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
        
        for (let i = 0; i < cars.length; i++) {
            console.log(cars[i]); 
        }


Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed.





2) for/in - loops through the properties of an object


Syntax

for (key in object) {
  // code block to be executed
}

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
  console.log(person[x]); // john doe 25
}


The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

for (variable in array) {
  code
}

const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
  console.log(numbers[x]); // 45, 4, 9, 16, 25
}

Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  console.log(value); // 45, 4, 9, 16, 25
}

3) for/of - loops through the values of an iterable object

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {

  // code block to be executed

}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.
For/of was added to JavaScript in 2015 (ES6)

const cars = ["BMW", "Volvo", "Mini"];          
            
            for (let x of cars) {

             console.log(x); // BMW, Volvo, Mini 

            }



4) while - loops through a block of code while a specified condition is true
while (condition) {
  // code block to be executed
}

let i = 0; 
while (i < 10) {
  console.log(i);
  i++;
}


5) do/while - also loops through a block of code while a specified condition is true
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

syntax
do {
  // code block to be executed
}
while (condition);


do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}


## The Break Statements
You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
The break statement can also be used to jump out of a loop:

for (let i = 0; i < 10; i++) {
  if (i === 6) { break; }
  console.log("The number is " + i); 
}

## The continue statement
The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.


for (let i = 0; i < 10; i++) {
  if (i === 3) { Continue; }
  console.log("The number is " + i); 
}
This example skips the value of 3:


The continue statement (with or without a label reference) can only be used to skip one loop iteration.

The break statement, without a label reference, can only be used to jump out of a loop or a switch.

With a label reference, the break statement can be used to jump out of any code block:


## Function 
A  function is a block of code designed to perform a particular task.
A  function is executed when "something" invokes it (calls it).
A  function is code of block where we write a separate logic and return some output.

1. function statement / function declaration
when we use function keyword and function name with parentheses and curly brackets it's called function statement.
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

SYNTAX

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

function myFunc() {
    // logic
    // return something
}

2. function expression
when we assign a function to a variable is called function expression.

const myFuncExp = function() {
    // logic
    // return something
}


3. function declaration
    it is similar to function statement

4. anonymous function
function without a name is called anonymous function.

=> use in callback
setTimeout(function(){

})

=> use in function expression
const myFunc = function() {

}

=>we can not use anonymous function directly because it will give syntax error
function() {
    console.log('my anonymous function')
}

5. named function expression
function with name and assign to a variable
const myFunc = function namedFunc() {
    console.log('my named function')
}
myFunc()

6. difference between parameters & arguments
    function myFunction(a, b) { // parameters
        console.log(a + b)
    }

    myFunction(3, 6) // arguments


7. first class / first citizen function

    =>. assign to variable
    const myFunc = function() {

    }
    => pass a function as argument
    function myFunction(a, b) {

    }
    function a() {
        return 10
    }

    myFunction(a, b)

    => return a function from a function

    function myFunc() {
        return function myChild() {
            console.log('runnnn')
            return 
        }
    }

    myFunc()

8. arrow function
    const myFunc = (a, b) =>  a + b

    myFunc(2, 5)
const myFunc = (a, b) => {
    const c = a + b
    return c + a + b
}

 const a = () => 10




9. pure function
function which takes same input and return same output and there is no side effect of this function in outer scope of state.

let a = 10
function nonPureFunction(x) {
    a = 30
    return a * x
}
nonPureFunction(30)
console.log(a)

function pureFunction(x) {
    const y = 30
    return y * x
}
pureFunction(30)



10. higher order function
A function which takes one or more then one function as arguments or return a function is called higher order function.

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide() {
    return a / b;
}

function higherOrderFunc(calculate) {
    return function(type, a, b) { 
        calculate.type(a, b) 
    }

}

const a = 5
const b = 3
const myCalculate = [add, subtract, multiply, divide]
const calculator = higherOrderFunc(myCalculate)

calculator(0, a, b)




11. immediately invoked function expressions (IIFE)

(function() {
    console.log("run iife")
})()



## Objects
In real life, a car is an object.
A car has properties like weight and color, and methods like start and stop:

SYNTAX
const car = {type:"Fiat", model:"500", color:"white"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

## Object Methods
1)Objects can also have methods.
2)Methods are actions that can be performed on objects.
3)Methods are stored in properties as function definitions.
4)A method is a function stored as a property.

const person = {
  firstName: "Arm",
  lastName : "khan",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

## This Keyword 
=>  this refers to the "owner" of the function.
=>  In the example above, this is the person object that "owns" the fullName function.
=>  In other words, this.firstName means the firstName property of this object.

=>  the this keyword refers to an object. Which object depends on how this is being invoked (used or called).
=>  In an object method, this refers to the object.
=>  Alone, this refers to the global object.
=>  In a function, this refers to the global object.
=>  In a function, in strict mode, this is undefined.
=>  In an event, this refers to the element that received the event.
=>  Methods like call(), apply(), and bind() can refer this to any object.


## JavaScript Events
=> HTML events are "things" that happen to HTML elements.
=> When JavaScript is used in HTML pages, JavaScript can "react" on these events.

## HTML Events
=> An HTML event can be something the browser does, or something a user does.
=> Here are some examples of HTML events:

=> An HTML web page has finished loading
=> An HTML input field was changed
=> An HTML button was clicked

## Event	         Description
onchange-----------An HTML element has been changed
onclick------------The user clicks an HTML element
onmouseover--------The user moves the mouse over an HTML element
onmouseout---------The user moves the mouse away from an HTML element
onkeydown----------The user pushes a keyboard key
onload-------------The browser has finished loading the page

## JavaScript Strings
=> JavaScript strings are for storing and manipulating text.
=> A JavaScript string is zero or more characters written inside quotes.
 syntax 
 let text = "Arm khan"; => You can use single or double quotes:

=>  To find the length of a string, use the built-in length property:

 const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 console.log(text.length); // 26

 const myString = "My name is Arm"; console.log(myString.length) // 14
 const myString = "My name is Arm"; console.log(myString[0]) // M
 const myString = "My name is Arm"; console.log(myString.toUpperCase())
 const myString = "My name is Arm"; console.log(myString.toLowerCase())
 const myString = "My name is Arm"; console.log(myString.trim())

 const myString = "My name is Arm"; console.log(myString.split(" "))
   output  ['My', 'name', 'is', 'Arm']

   const myString = "My name is Amar"; console.log(myString.replaceAll("Amar", "Arm"))
    output  My name is Arm

let str = "Apple, Banana, Kiwi";
console.log(str.substring(7,13)); // Banana

let text="My Name is Arm khan";
console.log(text.replace("Arm khan","Armaan khan")); 

1)  String length           2) String slice()             3) String substring()
4)  String substr()         5) String replace()           6) String replaceAll()
7)  String toUpperCase()    8) String toLowerCase()       9) String concat()
10) String trim()          11) String trimStart()        12) String trimEnd()
13) String padStart()      14) String padEnd()           15) String charAt()
16) String charCodeAt()    17) String split()


## JavaScript Numbers
=> Javascript has only one type of number. Numbers can be written with or without decimals.

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
 
 ==> These number methods can be used on all JavaScript numbers:


1) toString()	       Returns a number as a string
2) toExponential()	 Returns a number written in exponential notation
3) toFixed()	       Returns a number written with a number of decimals
4) toPrecision()     Returns a number written with a specified length
5) ValueOf()	       Returns a number as a number


==> There are 3 JavaScript methods that can be used to convert a variable to a number:

1) Number()	    Returns a number converted from its argument.
2) parseFloat()	Parses its argument and returns a floating point number
3) parseInt()	  Parses its argument and returns a whole number

## Array
=> An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];

## Array Object
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

const person = {firstName:"Arm", lastName:"khan", age:46};


## Associative Arrays
=> Arrays with named indexes are called associative arrays (or hashes).
=> JavaScript does not support arrays with named indexes.
=> In JavaScript, arrays always use numbered indexes.

## The Difference Between Arrays and Objects  
In JavaScript, arrays use numbered indexes. 
In JavaScript, objects use named indexes.

## Array Iteration

 ## 1) array pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); //  Mango

## 2) Array Map()
=> The map() method creates a new array by performing a function on each array element.
const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt)); // 2,3,4,5

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2); // 90,8,18,32,50

function myFunction(value, index, array) {
  return value * 2;
}


## 3) Array find()
=> The find() method returns the value of the first array element that passes a test function.

const ages = [3, 10, 18, 20, 30];
function checkAge(age) {
  return age > 18;
}
console.log(ages.find(checkAge)); // 20

## 4) array isArray()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result =  Array.isArray(fruits);
console.log(fruits);

## 5) array reverse
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());

## 6) array un shift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const =fruits2 = fruits.unshift("Lemon");
console.log(fruits2);

## 7) array Sort()
The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple, Banana, Mango, Orange

const points = [40, 100, 1, 5, 25, 10];
point.sort(); // 1,5,10,25,40,100

## 8) Array flatMap()
=> ES2019 added the Array flatMap() method to JavaScript.
=> The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);  //  [2, 4, 6, 8, 10, 12]


## 9) Array filter()
=> The filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

console.log(over18); // 45,25

function myFunction(value, index, array) {
  return value > 18;
}

## 10) Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers3.reduce(myFunction);

console.log(sum); // 99

function myFunction(total, value, index, array) {
  return total + value;
}

## 11) Array every()
The every() method checks if all array values pass a test.

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

console.log( allOver18); // false

function myFunction(value, index, array) {
  return value > 18;
}

## 12) Array some()
=> The some() method checks if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.some(myFunction);

console.log( allOver18);  // true

function myFunction(value, index, array) {
  return value > 18;
}

## 13) Array indexOf()
=> The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Orange") + 1;

console.log(position); //  2

## 14) Array from()
=> The Array.from() method returns an Array object from any object with a length property or any iterable object.

const myArr2 = Array.from("ABCDEFG");
 console.log(myArr2); // A, B, C, D, E, F, G

## 15 Array keys()
=> The Array.keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text = "";
for (let x of keys) {
  console.log(text += x);
}

## 16) Array includes()
=> ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));//  true


## Array Const
=> JavaScript const variables must be assigned a value when they are declared:
=> An array declared with const must be initialized when it is declared.

const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{  
  const cars = ["Toyota", "Volvo", "BMW"]; 
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
console.log(cars[0]); //  Saab


## Javascript Math
=> The JavaScript Math object allows you to perform mathematical tasks on numbers.

## 1) Math.round(x)
=> Returns x rounded to its nearest integer.

const myNumber = 34.354
console.log(Math.round(myNumber)); //  34


## 2) Math.ceil(x)	
=> Returns x rounded up to its nearest integer
const myNumber = 34.354
console.log(Math.ceil(myNumber)); //  35

## 3) Math.floor(x)

=> 	Returns x rounded down to its nearest integer
const myNumber = 34.354
console.log(Math.floor(myNumber)); // 34

## 4) Math.trunc(x) 
=> returns the integer part of x:
const myNumber = 34.354
console.log(Math.trunc(myNumber));


## 5) Math.trunc(x) 
==> returns if x is negative, null or positive:
const myNumber = 34.354
console.log(Math.sign(myNumber)); // 1

## 6) Math.pow(x, y)
=> returns the value of x to the power of y:
console.log(Math.pow(8,2)); // 64

## 7) Math.sqrt(x) 
=> returns the square root of x:
console.log(Math.sqrt(64)); // 8

## 8) Math.abs(x) 
=> returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); // 4.7

## 9) Math.min() and Math.max()
=>  can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(0, 150, 30, 20, -8, -200)); //  -200

console.log(Math.max(0, 150, 30, 20, -8, -200)); //  150

## 10) Math.random()
=> returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random()); // 0.9840037224673268


## javascript Boolean
=> A JavaScript Boolean represents one of two values: true or false.
console.log(Boolean(10 > 9)); //  true

## Comparison and Logical operators
=> are used to test for true or false.

let x = 5; console.log((x==5)); //  true
let x = 5; console.log((x===5)); //  true
let x = 5; console.log((x!=5)); //  false
let x = 5; console.log((x < 8)); //  true

let name = null;
let text = "Armaan khan";
let result = name ?? text; console.log(result); //  Armaan khan


## Javascript Dates
const d = new Date();
console.log(d);  // display the current date

const currentDate = new Date('Sun Aug 20 2023 10:07:59')
const oldDate = new Date('Sat Aug 19 2023 10:07:59')
const myRes = (currentDate.getTime() > oldDate.getTime()) ? 'true' : 'false'
console.log("myRes", myRes) // true
console.log(currentDate.getTime()) // 1692506279000

## Get Date Methods
getFullYear()--------------Get year as a four digit number (yyyy)
const d = new Date("2023-03-25")
console.log(d.getFullYear()); //2023

getMonth()-----------------Get month as a number (0-11)
const d = new Date("2023-03-25")
console.log(d.getMonth()+1); // 3

getDate()-------------------Get day as a number (1-31)
const d = new Date("2023-03-25")
console.log(d.getDate()); // 25

getDay()--------------------Get weekday as a number (0-6)
const d = new Date("2023-03-25")
console.log(d.getDay()); // 6

getHours()----------------- Get hour (0-23)
const d = new Date("2023-03-25")
console.log(d.getHours()); // 30

getMinutes()--------------- Get minute (0-59)
const d = new Date("2023-03-25")
console.log(d.getMinutes()); // 30

getSeconds()----------------Get second (0-59)
const d = new Date("2021-03-25")
console.log(d.getSeconds()); // 0


getMilliseconds()-----------Get millisecond (0-999)
const d = new Date("2023-03-25")
console.log(d.getMilliseconds()); // 0

getTime()-------------------Get time (milliseconds since March 25, 2023)
const d = new Date("2023-03-25")
console.log(d.getTime());  1679702400000


## Set Date Methods

setDate()---------------------------Set the day as a number (1-31)
setFullYear()----------------------	Set the year (optionally month and day)
setHours()--------------------------Set the hour (0-23)
setMilliseconds()-------------------Set the milliseconds (0-999)
setMinutes()------------------------Set the minutes (0-59)
setMonth()--------------------------Set the month (0-11)
setSeconds()-----------------------Set the seconds (0-59)
setTime()-------------------------Set the time (milliseconds since March 25, 2023)

## Javascript Closures
=> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
=> A closure gives you access to an outer function's scope from an inner function
=> A closure is a function having access to the parent scope, even after the parent function has closed.

=> A closure is a function that references variables in the outer scope from its inner scope.
=> JavaScript variables can belong to the local or global scope.
=> Global variables can be made local (private) with closures.

=> A function can access all variables defined inside the function, like this:

function myFunction() {
  let a = 4;
  return a * a;
}

=> But a function can also access variables defined outside the function, like this:
let a = 4;
function myFunction() {
  return a * a;
}


## JavaScript Sets
=> A JavaScript Set is a collection of unique values.
=> Each value can only occur once in a Set.

Method-----------------------------Description

new Set()--------------------------Creates a new Set

const letters = new Set(["a","b","c"]);
console.log(letters.size); // 3

add()------------------------------Adds a new element to the Set

const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters.size); // 3

delete()---------------------------Removes an element from a Set

has()------------------------------Returns true if a value exists in the Set

forEach()--------------------------Invokes a callback for each element in the Set

const letters4 = new Set(["a","b","c"]);
let text4 = "";
letters.forEach (function(value) {
  text4 += value;
})
console.log(text4); // abc



values()---------------------------Returns an iterator with all the values in a Set

const letters = new Set(["a","b","c"]);
console.log(letters.values());

Property---------------------------Description

size-------------------------------Returns the number of elements in a Set

const letters = new Set(["a","b","c"]);
console.log(letters.size); // 3


## JavaScript Maps
=> A Map holds key-value pairs where the keys can be any datatype.

new Map()---------------------------Creates a new Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("apples")); //  500

set()-------------------------------Sets the value for a key in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("apples", 200); // 200

get()-------------------------------Gets the value for a key in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("apples")); //  500

delete()----------------------------Removes a Map element specified by the key

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.delete("apples");
console.log(fruits.size); //  2

has()-------------------------------Returns true if a key exists in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.has("apples")); // true

forEach()---------------------------Calls a function for each key/value pair in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
 console.log(text);

entries()---------------------------Returns an iterator with the [key, value] pairs in a Map

const fruits6 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text6 = "";
for (const x of fruits6.entries()) {
  text6 += x ;
}  console.log(text6);



Property----------------------------Description

size--------------------------------Returns the number of elements in a Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.size); //  3

## JavaScript Regular Expressions
=> A regular expression is a sequence of characters that forms a search pattern.
=> The search pattern can be used for text search and text replace operations.
=> Regular expressions can be used to perform all types of text search and text replace operations.

=> The search() method searches a string for a specified value and returns the position of the match:

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n); //6

=> The replace() method replaces a specified value with another value in a string:

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools"); console.log(result)
Output == Visit W3Schools!


## JavaScript Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

let x = 100 + 50 * 3; // 250
let x = (100 + 50) * 3; // 450
let x = 100 / 50 * 3;  // 6

## JavaScript Errors
=> The try statement defines a code block to run (to try).
=> The catch statement defines a code block to handle any error.
=> The finally statement defines a code block to run regardless of the result.
=> The throw statement defines a custom error.

=> The try statement allows you to define a block of code to be tested for errors while it is being executed.
=> The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}


## Javascript Scope
=> scope determines the visibility of variables.
=> JavaScript has 3 types of scope:
1) Block scope
2) Function scope
2) Global scope

=> Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

## 1) Local Scope
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have Function Scope:
They can only be accessed from within the function.

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

## 2) Global Scope
=> A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


## Hoisting
=> Hoisting is JavaScript's default behavior of moving declarations to the top.
=> Variables defined with var are hoisted to the top and can be initialized at any time.

Meaning: You can use the variable before it is declared:

=> Hoisting is behavior in javascript where we can access variable, function before intialization.
console.log(a)
var a = 10

x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                    // Display x in the element
var x; // Declare x


var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;


## "use strict"
=> Defines that JavaScript code should be executed in "strict mode"
"use strict";
x = 3.14;  



## JavaScript this Keyword
=> this keyword refers to an object, Which object depends on how this is being invoked (used or called).
=> The this keyword refers to different objects depending on how it is used:

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

## Arrow functions were introduced in ES6.
=> Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

## javascript Class
=> ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
=> JavaScript Classes are templates for JavaScript Objects.
=> Use the keyword class to create a class.

=> Always add a method named constructor():

Syntax

class ClassName {
  constructor() { ... }
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

## The Constructor Method
=> The constructor method is a special method:

1) It has to have the exact name "constructor"
2) It is executed automatically when a new object is created
3) It is used to initialize object properties
4) If you do not define a constructor method, JavaScript will add an empty constructor method.


## Class Methods
=> Class methods are created with the same syntax as object methods.
=> Use the keyword class to create a class.
=> Always add a constructor() method.
=> Then add any number of methods.

Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

## JavaScript Modules
=> JavaScript modules allow you to break up your code into separate files.
=> This makes it easier to maintain a code-base.
=> Modules are imported from external files with the import statement.
=> Modules also rely on type="module" in the <script> tag.

<script type="module">
import message from "./message.js";
</script>

## Export
=> Modules with functions or variables can be stored in any external file.
=> There are two types of exports: Named Exports and Default Exports.

## 1) Named Exports
=> Let us create a file named person.js, and fill it with the things we want to export.
=> You can create named exports two ways. In-line individually, or all at once at the bottom.

## In-line individually:
person.js

export const name = "Jesse";
export const age = 40;

## All at once at the bottom:
person.js

const name = "Jesse";
const age = 40;

export {name, age};


## 2) Default Exports
=> Let us create another file, named message.js, and use it for demonstrating default export.
=> You can only have one default export in a file.

Example
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;

## Javascript JSON
=> JSON is a format for storing and transporting data.
=> JSON is often used when data is sent from a server to a web page.
=> JSON stands for JavaScript Object Notation
=> JSON is a lightweight data interchange format
=> JSON is language independent *
=> JSON is "self-describing" and easy to understand

{
"employees":[
  {"firstName":"Armaan", "lastName":"khan"},
  {"firstName":"Anna", "lastName":"khan"},
  {"firstName":"Amreen", "lastName":"khan"}
]
}

=> use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

let text = '{"employees":[' +
'{"firstName":"Arm","lastName":"khan" },' +
'{"firstName":"Anna","lastName":"khan" },' +
'{"firstName":"Amreen","lastName":"khan" }]}';

const obj = JSON.parse(text);


## DOM
=> The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
=> HTML DOM, JavaScript can access and change all the elements of an HTML document.
=> The programming interface is the properties and methods of each object.

=> A property is a value that you can get or set (like changing the content of an HTML element).
=> A method is an action you can do (like add or deleting an HTML element).

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

 <strong> Note.</strong> getElementById is a method, while innerHTML is a property.

## DOM document
=> The HTML DOM document object is the owner of all other objects in your web page.
=> The document object represents your web page.
=> If you want to access any element in an HTML page, you always start with accessing the document object.

# 1) Finding HTML Elements
Method------------------------------------Description

document.getElementById(id)---------------Find an element by element id

document.getElementsByTagName(name)-------Find elements by tag name

document.getElementsByClassName(name)-----Find elements by class name

# 2) Changing HTML Elements
Property----------------------------------Description

element.innerHTML-------------------------new html content	Change the inner HTML of an element

element.attribute-------------------------new value	Change the attribute value of an HTML element

element.style.property--------------------new style	Change the style of an HTML element

Method------------------------------------Description

element.setAttribute(attribute, value)----Change the attribute value of an HTML element


# 3) Adding and Deleting Elements
Method-----------------------------------Description

document.createElement(element)----------Create an HTML element

document.removeChild(element)------------Remove an HTML element

document.appendChild(element)------------Add an HTML element

document.replaceChild(new, old)----------Replace an HTML element

document.write(text)---------------------Write into the HTML output stream

# 4) Adding Events Handlers
Method--------------------------------------------------------Description

document.getElementById(id).onclick = function(){code}--------Adding event handler code to an onclick event

# 5) Finding HTML Objects
Property------------------------Description-------------------------------------------- DOM

document.anchors----------------Returns all <a> elements that have a name attribute----	1

document.applets----------------Deprecated---------------------------------------------	1

document.baseURI----------------Returns the absolute base URI of the document----------	3

document.body------------------Returns the <body> element------------------------------	1

document.cookie----------------Returns the document's cookie---------------------------	1

document.doctype---------------Returns the document's doctype--------------------------	3

document.documentElement-------Returns the <html> element------------------------------	3

document.documentMode----------Returns the mode used by the browser--------------------	3

document.documentURI-----------Returns the URI of the document-------------------------	3

document.domain----------------Returns the domain name of the document server---------	1

document.domConfig-------------Obsolete.----------------------------------------------	3

document.embeds----------------Returns all <embed> elements---------------------------	3

document.forms-----------------Returns all <form> elements----------------------------	1

document.head------------------Returns the <head> element-----------------------------  3

document.images----------------Returns all <img> elements-----------------------------	1

document.implementation--------Returns the DOM implementation-------------------------	3

document.inputEncoding---------Returns the document's encoding (character set)--------	3

document.lastModified----------Returns the date and time the document was updated-----	3

document.links-----------------Returns all <a> elements that have a href attribute----	1

document.readyState------------Returns the (loading) status of the document-------------3

document.referrer--------------Returns the URI of the referrer (the linking document)--	1

document.scripts---------------Returns all <script> elements--------------------------	3

document.strictErrorChecking---Returns if error checking is enforced------------------	3

document.title-----------------Returns the <title> element----------------------------	1

document.URL-------------------Returns the complete URL of the document---------------	1





